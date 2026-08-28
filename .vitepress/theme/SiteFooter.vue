<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { lang, frontmatter, isDark, theme } = useData()
const route = useRoute()

const hasSidebar = computed(() => {
  const sidebar = theme.value.sidebar

  if (frontmatter.value.sidebar === false || frontmatter.value.layout === 'home' || !sidebar) {
    return false
  }

  if (Array.isArray(sidebar)) {
    return sidebar.length > 0
  }

  return Object.entries(sidebar).some(([prefix, config]) => {
    const normalizedPrefix = prefix === '/' ? '/' : prefix.replace(/\/$/, '')
    const matchesPath = normalizedPrefix === '/'
      ? route.path.startsWith('/')
      : route.path === normalizedPrefix || route.path.startsWith(`${normalizedPrefix}/`)

    return matchesPath && Boolean(config)
  })
})

const isEnglish = computed(() => lang.value === 'en')
const links = computed(() => isEnglish.value ? {
  home: '/en',
  projects: '/en/projects',
  technologies: '/en/technologies',
  blog: '/en/blog',
  privacy: '/en/privacy-policy',
  terms: '/en/terms-of-service',
  deletion: '/en/user-data-deletion',
} : {
  home: '/',
  projects: '/projects',
  technologies: '/technologies',
  blog: '/blog',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  deletion: '/user-data-deletion',
})
</script>

<template>
  <footer
    class="site-footer"
    :class="{ 'has-sidebar': hasSidebar }"
    aria-labelledby="site-footer-title"
  >
    <div class="site-footer__container">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <a :href="links.home" class="site-footer__logo" id="site-footer-title" aria-label="Ryan Constantino">
            <img :src="isDark ? '/logo-dark.svg' : '/logo-light.svg'" alt="" />
          </a>
          <p>
            {{ isEnglish
              ? 'Backend development, cloud engineering and digital products built to grow your business.'
              : 'Desenvolvimento backend, engenharia de nuvem e produtos digitais feitos para fazer seu negócio crescer.' }}
          </p>
          <p class="site-footer__document">
            <span>{{ isEnglish ? 'Business ID' : 'CNPJ' }}</span>
            <strong>64.160.900/0001-89</strong>
          </p>
        </div>

        <nav class="site-footer__column" :aria-label="isEnglish ? 'Navigation' : 'Navegação'">
          <h2>{{ isEnglish ? 'Explore' : 'Explore' }}</h2>
          <a :href="links.home">{{ isEnglish ? 'Home' : 'Início' }}</a>
          <a :href="links.projects">{{ isEnglish ? 'Projects' : 'Projetos' }}</a>
          <a :href="links.technologies">{{ isEnglish ? 'Technologies' : 'Tecnologias' }}</a>
          <a :href="links.blog">Blog</a>
          <a href="https://calendly.com/ryahconstantino/meet-30-min" target="_blank" rel="noreferrer">
            {{ isEnglish ? 'Let’s work together' : 'Vamos trabalhar juntos' }}
          </a>
        </nav>

        <nav class="site-footer__column" :aria-label="isEnglish ? 'Legal links' : 'Links legais'">
          <h2>{{ isEnglish ? 'Legal' : 'Legal' }}</h2>
          <a :href="links.privacy">{{ isEnglish ? 'Privacy Policy' : 'Política de Privacidade' }}</a>
          <a :href="links.terms">{{ isEnglish ? 'Terms of Service' : 'Termos de Serviço' }}</a>
          <a :href="links.deletion">{{ isEnglish ? 'Data Deletion' : 'Exclusão de Dados' }}</a>
        </nav>

        <nav class="site-footer__column site-footer__social" :aria-label="isEnglish ? 'Social networks' : 'Redes sociais'">
          <h2>{{ isEnglish ? 'Connect' : 'Conecte-se' }}</h2>
          <a href="https://github.com/ryahconstantino" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ryahconstantino" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/5512996488381" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>

      <div class="site-footer__bottom">
        <p>
          {{ isEnglish ? 'Developed by' : 'Desenvolvido por' }}
          <a href="https://github.com/ryahconstantino" target="_blank" rel="noreferrer">Ryan Constantino</a>
        </p>
        <p>
          {{ isEnglish ? 'Released under the' : 'Lançado sob a' }}
          <a href="https://opensource.org/license/mit" target="_blank" rel="noreferrer">
            {{ isEnglish ? 'MIT License' : 'Licença MIT' }}
          </a>
          · © {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--vp-c-gutter);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.site-footer__container {
  position: relative;
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 32px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: minmax(220px, 1.8fr) repeat(3, minmax(130px, 1fr));
  gap: 48px;
  padding: 56px 0 48px;
}

.site-footer__brand {
  max-width: 330px;
}

.site-footer__logo {
  display: inline-flex;
  height: var(--vp-nav-logo-height);
  line-height: 0;
}

.site-footer__logo img {
  display: block;
  width: auto;
  height: 100%;
}

.site-footer__brand p {
  margin: 16px 0 0;
  font-size: 14px;
  line-height: 1.7;
}

.site-footer__document {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px !important;
  font-size: 12px !important;
}

.site-footer__document span {
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-footer__document strong {
  color: var(--vp-c-text-2);
  font-weight: 600;
  letter-spacing: 0.03em;
}

.site-footer__column {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
}

.site-footer__column h2 {
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer__column a,
.site-footer__bottom a {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.25s;
}

.site-footer__column a:hover,
.site-footer__bottom a:hover,
.site-footer__logo:hover {
  color: var(--vp-c-brand-1);
}

.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--vp-c-divider);
  padding: 22px 0 28px;
}

.site-footer__bottom p {
  margin: 0;
  color: var(--vp-c-text-3);
  font-size: 11px;
  line-height: 1.6;
}

.site-footer__bottom a {
  color: inherit;
  font-size: inherit;
  font-weight: 500;
}

@media (min-width: 960px) {
  .site-footer.has-sidebar {
    margin-left: var(--vp-sidebar-width);
  }

  .site-footer.has-sidebar .site-footer__container {
    max-width: none;
    padding-right: 32px;
    padding-left: 32px;
  }
}

@media (max-width: 1100px) and (min-width: 769px) {
  .site-footer__grid {
    grid-template-columns: minmax(210px, 1.5fr) repeat(3, minmax(110px, 1fr));
    gap: 32px 24px;
  }
}

@media (min-width: 1440px) {
  .site-footer.has-sidebar {
    margin-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width));
  }
}

@media (max-width: 768px) {
  .site-footer__container {
    padding: 0 24px;
  }

  .site-footer__grid {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
    gap: 40px 24px;
    padding: 44px 0 40px;
  }

  .site-footer__brand {
    grid-column: 1 / -1;
    max-width: 440px;
  }

  .site-footer__bottom {
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .site-footer__brand {
    grid-column: auto;
  }
}
</style>
