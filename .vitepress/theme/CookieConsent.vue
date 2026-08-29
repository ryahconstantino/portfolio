<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

type ConsentChoice = 'accepted' | 'denied'
type ClarityFunction = ((command: string, ...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    clarity?: ClarityFunction
  }
}

const storageKey = 'ryan.telemetry-consent.v1'
const { lang } = useData()
const isVisible = ref(false)
const isEnglish = computed(() => lang.value === 'en')
const copy = computed(() => isEnglish.value ? {
  title: 'Cookies and telemetry',
  description: 'We may use optional cookies and Microsoft Clarity telemetry to understand how the website is used and improve the experience. You can accept or decline.',
  privacy: 'Privacy Policy',
  accept: 'Accept',
  deny: 'Decline',
} : {
  title: 'Cookies e telemetria',
  description: 'Podemos usar cookies opcionais e a telemetria do Microsoft Clarity para entender como o site é utilizado e melhorar a experiência. Você pode aceitar ou recusar.',
  privacy: 'Política de Privacidade',
  accept: 'Aceitar',
  deny: 'Recusar',
})
const privacyLink = computed(() => isEnglish.value ? '/en/privacy-policy' : '/privacy-policy')

function getStoredChoice(): ConsentChoice | null {
  try {
    const choice = window.localStorage.getItem(storageKey)
    return choice === 'accepted' || choice === 'denied' ? choice : null
  } catch {
    return null
  }
}

function storeChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(storageKey, choice)
  } catch {
    // The current-page choice still applies when browser storage is unavailable.
  }
}

function initializeClarity() {
  const projectId = document.querySelector<HTMLMetaElement>('meta[name="clarity-project-id"]')?.content

  if (!projectId || document.querySelector('script[data-clarity-tracking]')) {
    return
  }

  if (!window.clarity) {
    const queue: unknown[][] = []
    const clarity = ((...args: unknown[]) => queue.push(args)) as ClarityFunction
    clarity.q = queue
    window.clarity = clarity
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`
  script.dataset.clarityTracking = projectId
  document.head.appendChild(script)
}

function updateClarityConsent(choice: ConsentChoice) {
  if (!window.clarity) {
    return
  }

  window.clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: choice === 'accepted' ? 'granted' : 'denied',
  })

  if (choice === 'denied') {
    window.clarity('consent', false)
  }
}

function choose(choice: ConsentChoice) {
  storeChoice(choice)

  if (choice === 'accepted') {
    initializeClarity()
  }

  updateClarityConsent(choice)
  isVisible.value = false
}

onMounted(() => {
  const storedChoice = getStoredChoice()

  if (storedChoice === 'accepted') {
    initializeClarity()
    updateClarityConsent(storedChoice)
    return
  }

  if (storedChoice === 'denied') {
    updateClarityConsent(storedChoice)
    return
  }

  isVisible.value = true
})
</script>

<template>
  <Transition name="cookie-consent" appear>
    <aside
      v-if="isVisible"
      class="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div class="cookie-consent__copy">
        <strong id="cookie-consent-title">{{ copy.title }}</strong>
        <p id="cookie-consent-description">
          {{ copy.description }}
          <a :href="privacyLink">{{ copy.privacy }}</a>
        </p>
      </div>
      <div class="cookie-consent__actions">
        <button type="button" class="cookie-consent__button" @click="choose('denied')">
          {{ copy.deny }}
        </button>
        <button type="button" class="cookie-consent__button cookie-consent__button--primary" @click="choose('accepted')">
          {{ copy.accept }}
        </button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.cookie-consent {
  position: fixed;
  right: 24px;
  bottom: 24px;
  left: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: min(calc(100% - 48px), 1152px);
  margin: 0 auto;
  padding: 20px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 78%, transparent);
  border-radius: 18px;
  background: color-mix(in srgb, var(--vp-c-bg) 92%, transparent);
  box-shadow: 0 22px 70px rgba(15, 23, 42, 0.2);
  backdrop-filter: blur(20px) saturate(1.25);
}

.cookie-consent__copy {
  max-width: 760px;
}

.cookie-consent__copy strong {
  display: block;
  color: var(--vp-c-text-1);
  font-size: 15px;
  letter-spacing: -0.015em;
}

.cookie-consent__copy p {
  margin: 6px 0 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.55;
}

.cookie-consent__copy a {
  margin-left: 4px;
  color: var(--vp-c-brand-1);
  font-weight: 650;
  text-decoration: none;
}

.cookie-consent__copy a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.cookie-consent__actions {
  display: flex;
  flex-shrink: 0;
  gap: 10px;
}

.cookie-consent__button {
  min-width: 104px;
  min-height: 42px;
  padding: 0 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 700;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.cookie-consent__button:hover {
  border-color: var(--vp-c-text-3);
  background: var(--vp-c-bg-alt);
}

.cookie-consent__button--primary {
  border-color: var(--vp-c-brand-3);
  background: var(--vp-c-brand-3);
  color: #fff;
}

.cookie-consent__button--primary:hover {
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
}

.cookie-consent__button:focus-visible,
.cookie-consent__copy a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.cookie-consent__button:active {
  transform: scale(0.97);
}

.cookie-consent-enter-active,
.cookie-consent-leave-active {
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(.22, 1, .36, 1);
}

.cookie-consent-enter-from,
.cookie-consent-leave-to {
  opacity: 0;
  transform: translateY(18px);
}

@media (max-width: 768px) {
  .cookie-consent {
    right: 16px;
    bottom: 16px;
    left: 16px;
    align-items: stretch;
    flex-direction: column;
    gap: 18px;
    width: calc(100% - 32px);
    padding: 18px;
    border-radius: 16px;
  }

  .cookie-consent__actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cookie-consent__button {
    width: 100%;
    min-width: 0;
  }
}

@media (max-width: 420px) {
  .cookie-consent__actions {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cookie-consent-enter-active,
  .cookie-consent-leave-active,
  .cookie-consent__button {
    transition: none;
  }
}
</style>
