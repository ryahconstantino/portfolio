<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEnglish = computed(() => lang.value.startsWith('en'))

const copy = computed(() => isEnglish.value ? {
  eyebrow: 'Built for real business goals',
  introTitle: 'From a good idea to a product people can rely on.',
  intro: 'I combine backend development, product thinking and cloud engineering to turn business goals into fast, dependable digital experiences.',
  introLink: 'See my approach',
  highlights: [
    { title: 'Web systems', detail: 'Clear platforms built around your operation.', icon: '/icons/expertise-web-systems-flat.png' },
    { title: 'Digital products', detail: 'Useful experiences that make the next step feel natural.', icon: '/icons/expertise-digital-products-flat.png' },
    { title: 'Cloud infrastructure', detail: 'Reliable foundations that are ready to scale.', icon: '/icons/expertise-cloud-infrastructure-flat.png' },
    { title: '5+ years', detail: 'Building products, backend and cloud foundations.', icon: '/icons/highlight-experience-flat.png' },
    { title: '20+ projects', detail: 'Delivered from the brief through launch.', icon: '/icons/highlight-projects-flat.png' },
    { title: 'Google Cloud', detail: 'Certified as an Associate Cloud Engineer', icon: '/icons/highlight-cloud-certification-flat.png' },
  ],
  servicesTitle: 'What I can help you build',
  services: [['01', 'Custom systems', 'Clear, maintainable platforms designed around your operation, not a generic template.'], ['02', 'Websites that convert', 'Fast, accessible websites designed to make the next step obvious for your audience.'], ['03', 'Cloud that supports growth', 'Infrastructure, integrations and observability that keep the product reliable as it evolves.']],
  workTitle: 'Selected work',
  cases: [['VitePlan', 'Benefits management platform', '/projects-viteplan.webp', '/en/projects/viteplan'], ['Sim Conceito', 'Digital catalog and commercial site', '/projects-simconceito.webp', '/en/projects/sim-conceito'], ['Moura Multicar', 'Inventory and lead generation', '/projects-mouramulticar.webp', '/en/projects/moura-multicar']],
  caseLink: 'Read the case', projects: '/en/projects', allCases: 'Explore all projects',
  processLabel: 'How we work', processTitle: 'A clear path from brief to launch.',
  process: [['01', 'Context', 'We align on the audience, business goal and the decision this project needs to improve.'], ['02', 'Direction', 'We define the scope, priorities and the smallest valuable version to launch.'], ['03', 'Delivery', 'I build, test and deploy with visibility at every meaningful decision.']],
  next: 'Next step', ctaTitle: 'Have a project that deserves to move forward?', ctaText: 'Book a 30-minute conversation. We will map the opportunity and the most practical next step — no commitment required.', ctaPrimary: 'Schedule a conversation', ctaSecondary: 'Message on WhatsApp',
} : {
  eyebrow: 'Tecnologia para objetivos de negócio reais',
  introTitle: 'De uma boa ideia a um produto em que as pessoas podem confiar.',
  intro: 'Uno desenvolvimento backend, visão de produto e engenharia de nuvem para transformar objetivos de negócio em experiências digitais rápidas, confiáveis e fáceis de evoluir.',
  introLink: 'Conheça minha abordagem',
  highlights: [
    { title: 'Sistemas web', detail: 'Plataformas claras, desenhadas em torno da sua operação.', icon: '/icons/expertise-web-systems-flat.png' },
    { title: 'Produtos digitais', detail: 'Experiências úteis que deixam o próximo passo natural.', icon: '/icons/expertise-digital-products-flat.png' },
    { title: 'Infraestrutura cloud', detail: 'Uma base confiável e pronta para crescer.', icon: '/icons/expertise-cloud-infrastructure-flat.png' },
    { title: '5+ anos', detail: 'Em produtos, backend e infraestrutura cloud.', icon: '/icons/highlight-experience-flat.png' },
    { title: '20+ projetos', detail: 'Entregues do briefing ao lançamento.', icon: '/icons/highlight-projects-flat.png' },
    { title: 'Google Cloud', detail: 'Certificado como Associate Cloud Engineer', icon: '/icons/highlight-cloud-certification-flat.png' },
  ],
  servicesTitle: 'O que podemos construir juntos',
  services: [['01', 'Sistemas sob medida', 'Plataformas claras e sustentáveis, desenhadas em torno da sua operação — não de um modelo genérico.'], ['02', 'Sites que convertem', 'Sites rápidos e acessíveis, com uma jornada que deixa o próximo passo evidente para cada visitante.'], ['03', 'Cloud pronta para crescer', 'Infraestrutura, integrações e observabilidade para manter o produto confiável conforme ele evolui.']],
  workTitle: 'Projetos em destaque',
  cases: [['VitePlan', 'Plataforma de gestão de benefícios', '/projects-viteplan.webp', '/projects/viteplan'], ['Sim Conceito', 'Catálogo digital e site comercial', '/projects-simconceito.webp', '/projects/sim-conceito'], ['Moura Multicar', 'Inventário e geração de oportunidades', '/projects-mouramulticar.webp', '/projects/moura-multicar']],
  caseLink: 'Ler o case', projects: '/projects', allCases: 'Explorar todos os projetos',
  processLabel: 'Como trabalhamos', processTitle: 'Um caminho claro do briefing ao lançamento.',
  process: [['01', 'Contexto', 'Alinhamos público, objetivo de negócio e a decisão que este projeto precisa melhorar.'], ['02', 'Direção', 'Definimos escopo, prioridades e a menor versão valiosa para entrar no ar.'], ['03', 'Entrega', 'Construo, testo e publico com visibilidade em cada decisão importante.']],
  next: 'Próximo passo', ctaTitle: 'Tem um projeto que merece sair do papel?', ctaText: 'Agende uma conversa de 30 minutos. Vamos mapear a oportunidade e o próximo passo mais prático, sem compromisso.', ctaPrimary: 'Agendar uma conversa', ctaSecondary: 'Chamar no WhatsApp',
})

const calendlyUrl = 'https://calendly.com/ryahconstantino/meet-30-min'
const whatsappUrl = 'https://wa.me/5512996488381'

const showcaseRoot = ref<HTMLElement | null>(null)
const motionEnabled = ref(false)
let revealObserver: IntersectionObserver | undefined

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  motionEnabled.value = true
  await nextTick()

  const elements = showcaseRoot.value?.querySelectorAll<HTMLElement>('[data-reveal]') ?? []

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    })
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px',
  })

  elements.forEach((element) => revealObserver?.observe(element))
})

onBeforeUnmount(() => revealObserver?.disconnect())
</script>

<template>
  <div ref="showcaseRoot" class="showcase" :class="{ 'showcase--motion': motionEnabled }">
    <section class="showcase__intro" aria-labelledby="intro-title">
      <div class="showcase__container">
        <div class="showcase__intro-copy" data-reveal>
          <p class="showcase__eyebrow">{{ copy.eyebrow }}</p>
          <h2 id="intro-title">{{ copy.introTitle }}</h2>
          <p class="showcase__lead">{{ copy.intro }}</p>
          <a class="showcase__link" :href="copy.projects">{{ copy.introLink }}</a>
        </div>
        <ul class="showcase__highlights" :aria-label="isEnglish ? 'Areas of expertise and professional highlights' : 'Áreas de atuação e destaques profissionais'">
          <li v-for="(highlight, index) in copy.highlights" :key="highlight.title" data-reveal :style="{ '--reveal-index': index }">
            <img :src="highlight.icon" alt="" width="112" height="112" loading="lazy" decoding="async" />
            <div>
              <strong>{{ highlight.title }}</strong>
              <span>{{ highlight.detail }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="showcase__section" aria-labelledby="services-title">
      <div class="showcase__container">
        <h2 id="services-title" data-reveal>{{ copy.servicesTitle }}</h2>
        <div class="showcase__services">
          <article v-for="(service, index) in copy.services" :key="service[0]" data-reveal :style="{ '--reveal-index': index }">
            <span>{{ service[0] }}</span><h3>{{ service[1] }}</h3><p>{{ service[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="showcase__section showcase__work" aria-labelledby="work-title">
      <div class="showcase__container">
        <div class="showcase__section-header" data-reveal>
          <div><p class="showcase__eyebrow">Portfolio</p><h2 id="work-title">{{ copy.workTitle }}</h2></div>
        </div>
        <div class="showcase__cases">
          <a v-for="(project, index) in copy.cases" :key="project[0]" class="showcase__case" :href="project[3]" data-reveal :style="{ '--reveal-index': index }">
            <div class="showcase__image"><img :src="project[2]" :alt="`${project[0]} project preview`" loading="lazy" decoding="async" /></div>
            <div><p>{{ project[1] }}</p><h3>{{ project[0] }}</h3><span>{{ copy.caseLink }}</span></div>
          </a>
        </div>
        <a class="showcase__link showcase__all-cases" :href="copy.projects" data-reveal>{{ copy.allCases }}</a>
      </div>
    </section>

    <section class="showcase__section showcase__process" aria-labelledby="process-title">
      <div class="showcase__container">
        <div class="showcase__process-heading" data-reveal><p class="showcase__eyebrow">{{ copy.processLabel }}</p><h2 id="process-title">{{ copy.processTitle }}</h2></div>
        <ol class="showcase__steps"><li v-for="(step, index) in copy.process" :key="step[0]" data-reveal :style="{ '--reveal-index': index }"><span>{{ step[0] }}</span><div><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></div></li></ol>
      </div>
    </section>

    <section class="showcase__cta" aria-labelledby="contact-title">
      <div class="showcase__container showcase__cta-content">
        <div data-reveal><p class="showcase__eyebrow">{{ copy.next }}</p><h2 id="contact-title">{{ copy.ctaTitle }}</h2><p>{{ copy.ctaText }}</p></div>
        <div class="showcase__actions" data-reveal :style="{ '--reveal-index': 1 }">
          <a class="showcase__button showcase__button--primary" :href="calendlyUrl" target="_blank" rel="noreferrer">{{ copy.ctaPrimary }}</a>
          <a class="showcase__button showcase__button--secondary" :href="whatsappUrl" target="_blank" rel="noreferrer">{{ copy.ctaSecondary }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:global(.VPHome .vp-doc.container) { max-width: none; padding: 0; }
.showcase { color: var(--vp-c-text-1); }
.showcase__container { width: min(100% - 48px, 1152px); margin: 0 auto; }
.showcase__intro, .showcase__section, .showcase__cta { padding: var(--home-section-padding) 0; }
.showcase__intro { position: relative; overflow: clip; isolation: isolate; }
.showcase__intro::before { position: absolute; z-index: -1; top: 8%; left: 50%; width: min(70vw, 820px); height: 420px; border-radius: 50%; background: radial-gradient(circle, color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent), transparent 68%); filter: blur(34px); opacity: .72; content: ''; transform: translateX(-14%); pointer-events: none; }
.showcase__cta-content { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); gap: clamp(36px, 9vw, 128px); align-items: end; }
.showcase__eyebrow { margin: 0 0 14px; color: var(--vp-c-brand-1); font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.showcase h2 { max-width: 750px; margin: 0; color: var(--vp-c-text-1); font-size: clamp(28px, 4vw, 46px); line-height: 1.08; letter-spacing: -.045em; }
.showcase__lead { max-width: 680px; margin: 24px 0; color: var(--vp-c-text-2); font-size: 18px; line-height: 1.72; }
.showcase__link { display: inline-flex; gap: 9px; color: var(--vp-c-brand-1); font-size: 14px; font-weight: 750; text-decoration: none; }
.showcase__intro-copy { max-width: 720px; }
.showcase__highlights { display: grid; grid-auto-rows: 1fr; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 12px; margin: clamp(48px, 6vw, 76px) 0 0; padding: 0; list-style: none; }
.showcase__highlights li { position: relative; display: grid; min-width: 0; min-height: 230px; height: 100%; align-content: center; justify-items: center; gap: 12px; overflow: hidden; margin: 0; padding: 18px; border: 1px solid var(--vp-c-divider); border-radius: 18px; background: color-mix(in srgb, var(--vp-c-bg-soft) 92%, transparent); text-align: center; transition: transform .45s cubic-bezier(.22,1,.36,1), border-color .35s ease, box-shadow .45s ease; }
.showcase__highlights li + li { margin-top: 0; }
.showcase__highlights li::before { position: absolute; inset: 0; background: radial-gradient(circle at 18% 8%, rgba(255,255,255,.22), transparent 42%); opacity: 0; content: ''; transition: opacity .35s ease; pointer-events: none; }
.showcase__highlights img { display: block; width: 96px; height: 96px; margin: 0 auto; object-fit: contain; }
.showcase__highlights li > div { width: 100%; }
.showcase__highlights strong, .showcase__highlights span { display: block; overflow-wrap: anywhere; }
.showcase__highlights strong { color: var(--vp-c-text-1); font-size: 13px; font-weight: 750; letter-spacing: -.015em; line-height: 1.25; }
.showcase__highlights span { margin-top: 5px; color: var(--vp-c-text-2); font-size: 11px; line-height: 1.45; }
.showcase__services { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
.showcase__services article { min-width: 0; min-height: 250px; padding: 32px; border: 1px solid transparent; border-radius: 22px; background: var(--vp-c-bg-soft); transition: transform .45s cubic-bezier(.22,1,.36,1), border-color .35s ease, box-shadow .45s ease; }
.showcase__services span, .showcase__steps > li > span { color: var(--vp-c-brand-1); font-size: 12px; font-weight: 800; letter-spacing: .1em; }
.showcase h3 { margin: 48px 0 10px; color: var(--vp-c-text-1); font-size: 19px; letter-spacing: -.025em; }
.showcase__services p, .showcase__section-header > p, .showcase__steps p, .showcase__cta p:not(.showcase__eyebrow) { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.7; }
.showcase__work { background: var(--vp-c-bg-soft); }
.showcase__section-header { display: flex; align-items: end; justify-content: space-between; gap: 36px; }
.showcase__section-header > p { max-width: 385px; }
.showcase__cases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.showcase__case { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 22px; background: var(--vp-c-bg); color: inherit; text-decoration: none; transition: transform .55s cubic-bezier(.22,1,.36,1), box-shadow .55s ease, border-color .35s ease; }
.showcase__image { aspect-ratio: 16 / 10; overflow: hidden; background: var(--vp-c-bg-alt); }
.showcase__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s cubic-bezier(.22,1,.36,1), filter .5s ease; }
.showcase__case > div:last-child { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 22px; }
.showcase__case p { margin: 0; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.5; }
.showcase__case h3 { margin: 10px 0 26px; font-size: 20px; }
.showcase__case > div:last-child > span { margin-top: auto; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 750; }
.showcase__all-cases { margin-top: 34px; }
.showcase__process { border-bottom: 1px solid var(--vp-c-divider); }
.showcase__steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 44px; margin: 48px 0 0; padding: 0; list-style: none; }
.showcase__steps li { display: grid; min-width: 0; grid-template-columns: auto minmax(0, 1fr); gap: 18px; }
.showcase__steps h3 { margin: 0 0 8px; font-size: 18px; }
.showcase__cta { position: relative; overflow: hidden; background: linear-gradient(125deg,#172554,#243d8e 60%,#0e7490); color: #fff; }
.showcase__cta::after { position: absolute; right: -11vw; bottom: -22vw; width: min(52vw,620px); aspect-ratio: 1; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; box-shadow: 0 0 0 56px rgba(255,255,255,.05), 0 0 0 112px rgba(255,255,255,.04); content: ''; }
.showcase__cta-content { position: relative; z-index: 1; gap: 52px; }
.showcase__cta .showcase__eyebrow { color: #a5f3fc; }
.showcase__cta h2 { border-top: 1px solid #fff; color: #fff !important; }
.showcase__cta p:not(.showcase__eyebrow) { max-width: 620px; margin-top: 20px; color: rgba(255,255,255,.78); }
.showcase__actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; }
.showcase__button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 18px; border: 1px solid transparent; border-radius: 9px; font-size: 14px; font-weight: 750; text-decoration: none; transition: transform .35s cubic-bezier(.22,1,.36,1), background-color .25s ease, box-shadow .35s ease; }
.showcase__button:active { transform: scale(.97); }
.showcase__button--primary { background: #fff; color: #172554; }.showcase__button--primary:hover { background: #e0f2fe; }
.showcase__button--secondary { border-color: #25d366; background: #25d366; color: #fff !important; }.showcase__button--secondary:hover { border-color: #1da851; background: #1da851; color: #fff !important; }
@media (min-width: 769px) { .showcase__container { width: min(100% - 96px, 1152px); } }
@media (min-width: 960px) { .showcase__container { width: min(100% - 128px, 1152px); } }
@media (max-width: 1100px) and (min-width: 961px) { .showcase__highlights { gap: 8px; }.showcase__highlights li { min-height: 210px; gap: 10px; padding: 12px; border-radius: 16px; }.showcase__highlights img { width: 76px; height: 76px; }.showcase__highlights strong { font-size: 12px; }.showcase__highlights span { font-size: 10px; }.showcase__services article { min-height: 230px; padding: 24px; }.showcase__cases { gap: 14px; }.showcase__case > div:last-child { padding: 18px; }.showcase__steps { gap: 24px; } }
@media (max-width: 960px) { .showcase__cta-content { grid-template-columns: 1fr; }.showcase__highlights { grid-template-columns: repeat(3, minmax(0, 1fr)); }.showcase__cases,.showcase__steps { gap: 16px; }.showcase__actions { justify-content: flex-start; } }
@media (max-width: 800px) { .showcase__lead { font-size: 16px; }.showcase__services,.showcase__cases,.showcase__steps { grid-template-columns: 1fr; }.showcase__services article { min-height: auto; padding: 26px; }.showcase__services h3 { margin-top: 32px; }.showcase__section-header { display: block; }.showcase__section-header > p { margin-top: 18px; }.showcase__steps { gap: 28px; }.showcase__button { width: 100%; } }
@media (max-width: 480px) { .showcase h2 { font-size: clamp(27px, 9vw, 36px); overflow-wrap: anywhere; }.showcase__highlights { gap: 8px; margin-top: 42px; }.showcase__highlights li { min-height: 186px; gap: 8px; padding: 10px; border-radius: 14px; }.showcase__highlights img { width: 64px; height: 64px; }.showcase__highlights strong { font-size: 11px; }.showcase__highlights span { margin-top: 3px; font-size: 10px; line-height: 1.35; }.showcase__case > div:last-child { padding: 18px; } }
@media (hover: hover) { .showcase__highlights li:hover { border-color: color-mix(in srgb, var(--vp-c-brand-1) 46%, var(--vp-c-divider)); box-shadow: 0 22px 55px rgba(15,23,42,.11); transform: translateY(-7px) scale(1.015); }.showcase__highlights li:hover::before { opacity: 1; }.showcase__services article:hover { border-color: color-mix(in srgb, var(--vp-c-brand-1) 28%, transparent); box-shadow: 0 24px 60px rgba(15,23,42,.1); transform: translateY(-7px) scale(1.01); }.showcase__case:hover { border-color: var(--vp-c-brand-1); box-shadow: 0 26px 65px rgba(15,23,42,.15); transform: translateY(-8px) scale(1.012); }.showcase__case:hover img { filter: saturate(1.05); transform: scale(1.065); }.showcase__button:hover { box-shadow: 0 12px 30px rgba(15,23,42,.18); transform: translateY(-3px); } }
@media (prefers-reduced-motion: no-preference) { .showcase--motion [data-reveal]:not(.is-visible) { opacity: 0; filter: blur(7px); transform: translateY(28px) scale(.988); }.showcase--motion [data-reveal].is-visible { animation: showcase-reveal .9s calc(var(--reveal-index, 0) * 70ms) cubic-bezier(.22,1,.36,1) backwards; }.showcase__intro::before { animation: showcase-glow 9s ease-in-out infinite alternate; }.showcase__cta::after { animation: showcase-orbit 10s ease-in-out infinite alternate; } }
@keyframes showcase-reveal { from { opacity: 0; filter: blur(7px); transform: translateY(28px) scale(.988); } to { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); } }
@keyframes showcase-glow { from { opacity: .55; transform: translateX(-18%) scale(.94); } to { opacity: .82; transform: translateX(-8%) scale(1.08); } }
@keyframes showcase-orbit { from { transform: translate3d(0,0,0) scale(1); } to { transform: translate3d(-24px,-18px,0) scale(1.04); } }
@media (prefers-reduced-motion: reduce) { .showcase__highlights li,.showcase__services article,.showcase__case,.showcase__image img,.showcase__button { transition: none; } }
</style>
