<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEnglish = computed(() => lang.value.startsWith('en'))

const copy = computed(() => isEnglish.value ? {
  eyebrow: 'Built for real business goals',
  introTitle: 'From a good idea to a product people can rely on.',
  intro: 'I combine backend development, product thinking and cloud engineering to turn business goals into fast, dependable digital experiences.',
  introLink: 'See my approach',
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: '20+', label: 'Projects delivered' },
    { value: 'Google Cloud', label: 'Associate Cloud Engineer' },
  ],
  servicesTitle: 'What I can help you build',
  services: [['01', 'Custom systems', 'Clear, maintainable platforms designed around your operation, not a generic template.'], ['02', 'Websites that convert', 'Fast, accessible websites designed to make the next step obvious for your audience.'], ['03', 'Cloud that supports growth', 'Infrastructure, integrations and observability that keep the product reliable as it evolves.']],
  workTitle: 'Selected work',
  workText: 'A sample of projects where business context, user experience and technology had to work together.',
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
  stats: [
    { value: '5+', label: 'Anos de experiência' },
    { value: '20+', label: 'Projetos entregues' },
    { value: 'Google Cloud', label: 'Associate Cloud Engineer' },
  ],
  servicesTitle: 'O que podemos construir juntos',
  services: [['01', 'Sistemas sob medida', 'Plataformas claras e sustentáveis, desenhadas em torno da sua operação — não de um modelo genérico.'], ['02', 'Sites que convertem', 'Sites rápidos e acessíveis, com uma jornada que deixa o próximo passo evidente para cada visitante.'], ['03', 'Cloud pronta para crescer', 'Infraestrutura, integrações e observabilidade para manter o produto confiável conforme ele evolui.']],
  workTitle: 'Projetos em destaque',
  workText: 'Uma seleção de projetos em que contexto de negócio, experiência do usuário e tecnologia precisaram funcionar juntos.',
  cases: [['VitePlan', 'Plataforma de gestão de benefícios', '/projects-viteplan.webp', '/projects/viteplan'], ['Sim Conceito', 'Catálogo digital e site comercial', '/projects-simconceito.webp', '/projects/sim-conceito'], ['Moura Multicar', 'Inventário e geração de oportunidades', '/projects-mouramulticar.webp', '/projects/moura-multicar']],
  caseLink: 'Ler o case', projects: '/projects', allCases: 'Explorar todos os projetos',
  processLabel: 'Como trabalhamos', processTitle: 'Um caminho claro do briefing ao lançamento.',
  process: [['01', 'Contexto', 'Alinhamos público, objetivo de negócio e a decisão que este projeto precisa melhorar.'], ['02', 'Direção', 'Definimos escopo, prioridades e a menor versão valiosa para entrar no ar.'], ['03', 'Entrega', 'Construo, testo e publico com visibilidade em cada decisão importante.']],
  next: 'Próximo passo', ctaTitle: 'Tem um projeto que merece sair do papel?', ctaText: 'Agende uma conversa de 30 minutos. Vamos mapear a oportunidade e o próximo passo mais prático, sem compromisso.', ctaPrimary: 'Agendar uma conversa', ctaSecondary: 'Chamar no WhatsApp',
})

const calendlyUrl = 'https://calendly.com/ryahconstantino/meet-30-min'
const whatsappUrl = 'https://wa.me/5512996488381'
</script>

<template>
  <div class="showcase">
    <section class="showcase__intro" aria-labelledby="intro-title">
      <div class="showcase__container showcase__intro-grid">
        <div>
          <p class="showcase__eyebrow">{{ copy.eyebrow }}</p>
          <h2 id="intro-title">{{ copy.introTitle }}</h2>
          <p class="showcase__lead">{{ copy.intro }}</p>
          <a class="showcase__link" :href="copy.projects">{{ copy.introLink }} <span aria-hidden="true">→</span></a>
        </div>
        <dl class="showcase__stats" :aria-label="isEnglish ? 'Professional highlights' : 'Destaques profissionais'">
          <div v-for="stat in copy.stats" :key="stat.label"><dd>{{ stat.value }}</dd><dt>{{ stat.label }}</dt></div>
        </dl>
      </div>
    </section>

    <section class="showcase__section" aria-labelledby="services-title">
      <div class="showcase__container">
        <h2 id="services-title">{{ copy.servicesTitle }}</h2>
        <div class="showcase__services">
          <article v-for="service in copy.services" :key="service[0]">
            <span>{{ service[0] }}</span><h3>{{ service[1] }}</h3><p>{{ service[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="showcase__section showcase__work" aria-labelledby="work-title">
      <div class="showcase__container">
        <div class="showcase__section-header">
          <div><p class="showcase__eyebrow">Portfolio</p><h2 id="work-title">{{ copy.workTitle }}</h2></div>
          <p>{{ copy.workText }}</p>
        </div>
        <div class="showcase__cases">
          <a v-for="project in copy.cases" :key="project[0]" class="showcase__case" :href="project[3]">
            <div class="showcase__image"><img :src="project[2]" :alt="`${project[0]} project preview`" loading="lazy" decoding="async" /></div>
            <div><p>{{ project[1] }}</p><h3>{{ project[0] }}</h3><span>{{ copy.caseLink }} <b aria-hidden="true">↗</b></span></div>
          </a>
        </div>
        <a class="showcase__link showcase__all-cases" :href="copy.projects">{{ copy.allCases }} <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="showcase__section showcase__process" aria-labelledby="process-title">
      <div class="showcase__container">
        <p class="showcase__eyebrow">{{ copy.processLabel }}</p><h2 id="process-title">{{ copy.processTitle }}</h2>
        <ol class="showcase__steps"><li v-for="step in copy.process" :key="step[0]"><span>{{ step[0] }}</span><div><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></div></li></ol>
      </div>
    </section>

    <section class="showcase__cta" aria-labelledby="contact-title">
      <div class="showcase__container showcase__cta-content">
        <div><p class="showcase__eyebrow">{{ copy.next }}</p><h2 id="contact-title">{{ copy.ctaTitle }}</h2><p>{{ copy.ctaText }}</p></div>
        <div class="showcase__actions">
          <a class="showcase__button showcase__button--primary" :href="calendlyUrl" target="_blank" rel="noreferrer">{{ copy.ctaPrimary }} <span aria-hidden="true">→</span></a>
          <a class="showcase__button showcase__button--secondary" :href="whatsappUrl" target="_blank" rel="noreferrer">{{ copy.ctaSecondary }} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:global(.VPHome .vp-doc.container) { max-width: none; padding: 0; }
.showcase { color: var(--vp-c-text-1); }
.showcase__container { width: min(100% - 48px, 1152px); margin: 0 auto; }
.showcase__intro, .showcase__section, .showcase__cta { padding: 104px 0; }
.showcase__intro { padding-top: 46px; }
.showcase__intro-grid, .showcase__cta-content { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); gap: clamp(36px, 9vw, 128px); align-items: end; }
.showcase__eyebrow { margin: 0 0 14px; color: var(--vp-c-brand-1); font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.showcase h2 { max-width: 750px; margin: 0; color: var(--vp-c-text-1); font-size: clamp(28px, 4vw, 46px); line-height: 1.08; letter-spacing: -.045em; }
.showcase__lead { max-width: 680px; margin: 24px 0; color: var(--vp-c-text-2); font-size: 18px; line-height: 1.72; }
.showcase__link { display: inline-flex; gap: 9px; color: var(--vp-c-brand-1); font-size: 14px; font-weight: 750; text-decoration: none; }
.showcase__link span, .showcase__case b { display: inline-block; transition: transform .2s ease; }
.showcase__link:hover span, .showcase__case:hover b { transform: translateX(4px); }
.showcase__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 0; }
.showcase__stats div { min-height: 134px; padding: 22px 18px; border: 1px solid var(--vp-c-divider); border-radius: 18px; background: var(--vp-c-bg-soft); }
.showcase__stats dt { margin-top: 9px; color: var(--vp-c-text-2); font-size: 12px; font-weight: 600; line-height: 1.4; }
.showcase__stats dd { margin: 0; color: var(--vp-c-text-1); font-size: clamp(25px, 2.6vw, 34px); font-weight: 750; letter-spacing: -.05em; line-height: 1.05; }
.showcase__stats div:last-child dd { font-size: clamp(19px, 2vw, 25px); letter-spacing: -.035em; }
.showcase__services { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
.showcase__services article { min-height: 250px; padding: 32px; border-radius: 22px; background: var(--vp-c-bg-soft); transition: transform .25s ease, box-shadow .25s ease; }
.showcase__services article:hover { box-shadow: 0 16px 36px rgba(15, 23, 42, .08); transform: translateY(-3px); }
.showcase__services span, .showcase__steps > li > span { color: var(--vp-c-brand-1); font-size: 12px; font-weight: 800; letter-spacing: .1em; }
.showcase h3 { margin: 48px 0 10px; color: var(--vp-c-text-1); font-size: 19px; letter-spacing: -.025em; }
.showcase__services p, .showcase__section-header > p, .showcase__steps p, .showcase__cta p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.7; }
.showcase__work { background: var(--vp-c-bg-soft); }
.showcase__section-header { display: flex; align-items: end; justify-content: space-between; gap: 36px; }
.showcase__section-header > p { max-width: 385px; }
.showcase__cases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
.showcase__case { display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 22px; background: var(--vp-c-bg); color: inherit; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.showcase__case:hover { border-color: var(--vp-c-brand-1); box-shadow: 0 18px 45px rgba(15,23,42,.11); transform: translateY(-5px); }
.showcase__image { aspect-ratio: 16 / 10; overflow: hidden; background: var(--vp-c-bg-alt); }
.showcase__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.showcase__case:hover img { transform: scale(1.035); }
.showcase__case > div:last-child { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 22px; }
.showcase__case p { margin: 0; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.5; }
.showcase__case h3 { margin: 10px 0 26px; font-size: 20px; }
.showcase__case > div:last-child > span { margin-top: auto; color: var(--vp-c-brand-1); font-size: 13px; font-weight: 750; }
.showcase__all-cases { margin-top: 34px; }
.showcase__process { border-bottom: 1px solid var(--vp-c-divider); }
.showcase__steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 44px; margin: 48px 0 0; padding: 0; list-style: none; }
.showcase__steps li { display: grid; grid-template-columns: auto 1fr; gap: 18px; }
.showcase__steps h3 { margin: 0 0 8px; font-size: 18px; }
.showcase__cta { position: relative; overflow: hidden; background: linear-gradient(125deg,#172554,#243d8e 60%,#0e7490); color: #fff; }
.showcase__cta::after { position: absolute; right: -11vw; bottom: -22vw; width: min(52vw,620px); aspect-ratio: 1; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; box-shadow: 0 0 0 56px rgba(255,255,255,.05), 0 0 0 112px rgba(255,255,255,.04); content: ''; }
.showcase__cta-content { position: relative; z-index: 1; gap: 52px; }
.showcase__cta .showcase__eyebrow { color: #a5f3fc; }
.showcase__cta h2 { color: #fff; }
.showcase__cta p:not(.showcase__eyebrow) { max-width: 620px; margin-top: 20px; color: rgba(255,255,255,.78); }
.showcase__actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; }
.showcase__button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 18px; border: 1px solid transparent; border-radius: 9px; font-size: 14px; font-weight: 750; text-decoration: none; transition: transform .2s ease, background-color .2s ease; }
.showcase__button:hover { transform: translateY(-2px); }
.showcase__button--primary { background: #fff; color: #172554; }.showcase__button--primary:hover { background: #e0f2fe; }
.showcase__button--secondary { border-color: rgba(255,255,255,.45); color: #fff; }.showcase__button--secondary:hover { background: rgba(255,255,255,.1); }
@media (max-width: 960px) { .showcase__intro-grid,.showcase__cta-content { grid-template-columns: 1fr; }.showcase__cases,.showcase__steps { gap: 16px; }.showcase__actions { justify-content: flex-start; } }
@media (max-width: 720px) { .showcase__intro,.showcase__section,.showcase__cta { padding: 64px 0; }.showcase__intro { padding-top: 12px; }.showcase__lead { font-size: 16px; }.showcase__services,.showcase__cases,.showcase__steps { grid-template-columns: 1fr; }.showcase__services article { min-height: auto; padding: 26px; }.showcase__services h3 { margin-top: 32px; }.showcase__section-header { display: block; }.showcase__section-header > p { margin-top: 18px; }.showcase__steps { gap: 28px; }.showcase__button { width: 100%; } }
@media (max-width: 480px) { .showcase__container { width: min(100% - 40px,1152px); }.showcase__stats { grid-template-columns: 1fr; }.showcase__stats div { min-height: auto; padding: 20px; }.showcase__stats dd { font-size: 30px; } }
@media (prefers-reduced-motion: reduce) { .showcase__case,.showcase__image img,.showcase__button,.showcase__link span,.showcase__case b { transition: none; } }
</style>
