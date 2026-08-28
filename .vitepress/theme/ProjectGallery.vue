<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEnglish = computed(() => lang.value.startsWith('en'))

const content = computed(() => isEnglish.value ? {
  viewCase: 'View case',
  projects: [
    { name: 'VitePlan', category: 'Benefits management platform', description: 'Acquisition and management for healthcare benefits.', image: '/projects-viteplan.webp', link: '/en/projects/viteplan' },
    { name: 'Sim Conceito', category: 'Digital catalog', description: 'Commercial catalog for ceramic pools and accessories.', image: '/projects-simconceito.webp', link: '/en/projects/sim-conceito' },
    { name: 'Moura Multicar', category: 'Lead generation', description: 'Vehicle inventory and lead generation for a dealer.', image: '/projects-mouramulticar.webp', link: '/en/projects/moura-multicar' },
    { name: 'R & R Advocacia', category: 'Institutional website', description: 'Local authority and organic discovery for a legal practice.', image: '/projects-reradvocacia.webp', link: '/en/projects/rr-advocacia' },
    { name: 'Sim Piscinas', category: 'Product catalog', description: 'Pool catalog, accessories and reseller discovery.', image: '/projects-simpiscinas.webp', link: '/en/projects/simpiscinas' },
    { name: 'Yes Piscinas', category: 'Commercial acquisition', description: 'Warranty, partner and quote acquisition platform.', image: '/projects-yespiscinas.svg', link: '/en/projects/yespiscinas' },
  ],
} : {
  viewCase: 'Ver case',
  projects: [
    { name: 'VitePlan', category: 'Plataforma de benefícios', description: 'Aquisição e gestão para benefícios em saúde.', image: '/projects-viteplan.webp', link: '/projects/viteplan' },
    { name: 'Sim Conceito', category: 'Catálogo digital', description: 'Catálogo comercial para piscinas de cerâmica e acessórios.', image: '/projects-simconceito.webp', link: '/projects/sim-conceito' },
    { name: 'Moura Multicar', category: 'Geração de oportunidades', description: 'Inventário de veículos e geração de leads para revenda.', image: '/projects-mouramulticar.webp', link: '/projects/moura-multicar' },
    { name: 'R & R Advocacia', category: 'Site institucional', description: 'Autoridade local e descoberta orgânica para escritório jurídico.', image: '/projects-reradvocacia.webp', link: '/projects/rr-advocacia' },
    { name: 'Sim Piscinas', category: 'Catálogo de produtos', description: 'Catálogo de piscinas, acessórios e descoberta de revendedores.', image: '/projects-simpiscinas.webp', link: '/projects/simpiscinas' },
    { name: 'Yes Piscinas', category: 'Aquisição comercial', description: 'Plataforma para garantia, parceiros e pedidos de orçamento.', image: '/projects-yespiscinas.svg', link: '/projects/yespiscinas' },
  ],
})
</script>

<template>
  <div class="project-gallery">
    <a v-for="project in content.projects" :key="project.name" class="project-gallery__card" :href="project.link">
      <div class="project-gallery__image">
        <img :src="project.image" :alt="`${project.name} project preview`" loading="lazy" decoding="async" />
      </div>
      <div class="project-gallery__content">
        <p>{{ project.category }}</p>
        <h3>{{ project.name }}</h3>
        <span class="project-gallery__description">{{ project.description }}</span>
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
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
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
}

.project-gallery__link {
  margin-top: 20px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 640px) {
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
