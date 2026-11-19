<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { russianProjects } from './russian-content'

const { lang } = useData()
const isRussian = computed(() => lang.value === 'ru')
const isEnglish = computed(() => lang.value.startsWith('en'))

const content = computed(() => isRussian.value ? russianProjects : isEnglish.value ? {
  viewCase: 'View case',
  projects: [
    { name: 'VitePlan', category: 'Healthcare benefits', description: 'I structured plan, benefit and specialty journeys around contextual sales CTAs.', impact: 'Measures leads and attributed revenue by plan and acquisition source.', image: '/projects-viteplan.webp', link: '/en/projects/viteplan' },
    { name: 'Sim Conceito', category: 'Ceramic pools', description: 'I turned the catalog into a guided journey from model discovery to quote or reseller contact.', impact: 'Separates consumer and partner opportunities to protect each sales funnel.', image: '/projects-simconceito.webp', link: '/en/projects/sim-conceito' },
    { name: 'Moura Multicar', category: 'Vehicle retail', description: 'I connected the digital inventory, vehicle detail pages and WhatsApp conversations with vehicle context.', impact: 'Makes it possible to trace a lead back to the stock item, test drive and sale.', image: '/projects-mouramulticar.webp', link: '/en/projects/moura-multicar' },
    { name: 'R & R Advocacia', category: 'Legal services', description: 'I organized practice areas, attorney profiles and local contact routes into a clear authority journey.', impact: 'Connects qualified demand to the correct practice area while respecting legal communication rules.', image: '/projects-reradvocacia.webp', link: '/en/projects/rr-advocacia' },
    { name: 'Sim Piscinas', category: 'Fiberglass pools', description: 'I organized product lines, models and separate consumer and reseller journeys around the quote.', impact: 'Allows attribution by model, city, campaign and authorized reseller.', image: '/projects-simpiscinas.webp', link: '/en/projects/simpiscinas' },
    { name: 'Yes Piscinas', category: 'Commercial acquisition', description: 'I connected catalog, warranty, quote and reseller pages into traceable acquisition paths.', impact: 'Makes consumer and partner funnels comparable before revenue and media efficiency analysis.', image: '/projects-yespiscinas.svg', link: '/en/projects/yespiscinas' },
    { name: 'Método RS1', category: 'Business mentoring', description: 'I turned the mentoring offer into a qualifying landing page from diagnosis to pre-registration.', impact: 'Captures revenue, bottleneck and timing before the sales conversation.', image: '/projects-metodors1.webp', link: '/en/projects/metodo-rs1' },
    { name: 'Pablo Dias', category: 'Personal brand', description: 'I organized social profiles, blog and the featured Método RS1 project into a single brand hub.', impact: 'Connects social traffic and articles to a measurable commercial next step.', image: '/projects-pablodias.webp', link: '/en/projects/pablo-dias' },
    { name: 'Piscina Orgânica', category: 'Nature-inspired pools', description: 'I turned Bonito landscapes into a catalog of organic models with measurements and a quote path.', impact: 'Lets each conversation be attributed to Mimoso 4, Azul 6 or Misteriosa 8.', image: '/projects-piscinaorganica.webp', link: '/en/projects/piscina-organica' },
    { name: 'Vivite Saúde', category: 'Medical clinic', description: 'I structured specialties, exams and local trust signals around WhatsApp booking in Sorocaba.', impact: 'Makes specialty and exam demand comparable before the appointment is confirmed.', image: '/projects-vivite.webp', link: '/en/projects/vivite' },
  ],
} : {
  viewCase: 'Ver case',
  projects: [
    { name: 'VitePlan', category: 'Benefícios em saúde', description: 'Estruturei jornadas de planos, benefícios e especialidades com CTAs comerciais contextualizados.', impact: 'Permite medir leads e receita atribuída por plano e origem de aquisição.', image: '/projects-viteplan.webp', link: '/projects/viteplan' },
    { name: 'Sim Conceito', category: 'Piscinas de cerâmica', description: 'Transformei o catálogo em uma jornada guiada da descoberta do modelo ao orçamento ou contato de revenda.', impact: 'Separa oportunidades de consumidor e parceiro para proteger cada funil comercial.', image: '/projects-simconceito.webp', link: '/projects/sim-conceito' },
    { name: 'Moura Multicar', category: 'Revenda de veículos', description: 'Conectei inventário digital, páginas de veículos e conversas no WhatsApp com o contexto de cada anúncio.', impact: 'Permite relacionar o lead ao veículo, test-drive, proposta e venda.', image: '/projects-mouramulticar.webp', link: '/projects/moura-multicar' },
    { name: 'R & R Advocacia', category: 'Serviços jurídicos', description: 'Organizei áreas de atuação, perfis profissionais e rotas locais de contato em uma jornada de autoridade clara.', impact: 'Conecta demanda qualificada à área correta, respeitando a comunicação jurídica.', image: '/projects-reradvocacia.webp', link: '/projects/rr-advocacia' },
    { name: 'Sim Piscinas', category: 'Piscinas de fibra', description: 'Organizei linhas, modelos e jornadas separadas para consumidor e revendedor em torno do orçamento.', impact: 'Permite atribuir cada oportunidade ao modelo, cidade, campanha e revendedor autorizado.', image: '/projects-simpiscinas.webp', link: '/projects/simpiscinas' },
    { name: 'Yes Piscinas', category: 'Aquisição comercial', description: 'Conectei catálogo, garantia, orçamento e revenda em caminhos de aquisição rastreáveis.', impact: 'Torna comparáveis os funis de consumidor e parceiro antes da análise de receita e mídia.', image: '/projects-yespiscinas.svg', link: '/projects/yespiscinas' },
    { name: 'Método RS1', category: 'Mentoria empresarial', description: 'Transformei a oferta de mentoria em uma landing de qualificação, do diagnóstico ao pré-cadastro.', impact: 'Captura faturamento, gargalo e momento da empresa antes da conversa comercial.', image: '/projects-metodors1.webp', link: '/projects/metodo-rs1' },
    { name: 'Pablo Dias', category: 'Marca pessoal', description: 'Organizei redes, blog e o projeto em destaque Método RS1 em um hub único de marca.', impact: 'Conecta tráfego social e artigos a um próximo passo comercial mensurável.', image: '/projects-pablodias.webp', link: '/projects/pablo-dias' },
    { name: 'Piscina Orgânica', category: 'Piscinas de formas naturais', description: 'Transformei as paisagens de Bonito em um catálogo de modelos orgânicos com medidas e orçamento.', impact: 'Permite atribuir cada conversa a Mimoso 4, Azul 6 ou Misteriosa 8.', image: '/projects-piscinaorganica.webp', link: '/projects/piscina-organica' },
    { name: 'Vivite Saúde', category: 'Clínica multidisciplinar', description: 'Estruturei especialidades, exames e prova local em torno do agendamento por WhatsApp em Sorocaba.', impact: 'Torna comparável a demanda por especialidade e exame antes da consulta marcada.', image: '/projects-vivite.webp', link: '/projects/vivite' },
  ],
})
</script>

<template>
  <div class="project-gallery">
    <a v-for="project in content.projects" :key="project.name" class="project-gallery__card" :href="project.link">
      <div class="project-gallery__image">
        <img :src="project.image" :alt="isRussian ? `Предпросмотр проекта ${project.name}` : `${project.name} project preview`" loading="lazy" decoding="async" />
      </div>
      <div class="project-gallery__content">
        <p>{{ project.category }}</p>
        <h3>{{ project.name }}</h3>
        <span class="project-gallery__description">{{ project.description }}</span>
        <span class="project-gallery__impact">{{ project.impact }}</span>
        <span class="project-gallery__link">{{ content.viewCase }}</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.project-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 28px 0 52px;
}

.project-gallery__card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--site-radius-card);
  background: var(--vp-c-bg);
  color: inherit;
  text-decoration: none;
  transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
}

.project-gallery__card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 16px 36px rgba(15, 23, 42, .09);
  transform: translateY(-3px);
}

.project-gallery__image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.project-gallery__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}

.project-gallery__card:hover img {
  transform: scale(1.03);
}

.project-gallery__card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.project-gallery__card:active {
  transform: scale(.985);
}

.project-gallery__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 21px;
}

.project-gallery__content p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.45;
}

.project-gallery__content h3 {
  margin: 8px 0 10px;
  color: var(--vp-c-text-1);
  font-size: 19px;
  letter-spacing: -.025em;
}

.project-gallery__description {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.project-gallery__impact {
  margin-top: 14px;
  border-left: 2px solid var(--vp-c-brand-1);
  padding-left: 10px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.5;
}

.project-gallery__link {
  margin-top: 20px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .project-gallery {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-gallery__card,
  .project-gallery__image img {
    transition: none;
  }
}
</style>
