<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEnglish = computed(() => lang.value.startsWith('en'))

const content = computed(() => isEnglish.value ? {
  repositoryLabel: 'View repository',
  websiteLabel: 'Open project website',
  statusLabel: 'Discontinued',
  technologiesLabel: 'Technologies used in',
  projects: [
    {
      id: 'deejazz',
      name: 'DeeJazz',
      eyebrow: 'Desktop application',
      description: 'A desktop Deezer client for Windows and Linux with built-in uBlock Origin Lite integration, custom cosmetic filters and native Linux features.',
      detail: 'Packages for Windows, Linux x86_64 and ARM64, plus media controls, system tray and Wayland support.',
      image: '/personal-projects/deejazz.ico',
      imageAlt: 'DeeJazz application icon',
      repository: 'https://github.com/ryahconstantino/deejazz',
      website: 'https://ryahconstantino.github.io/deejazz/',
      technologies: ['Electron', 'JavaScript', 'Windows', 'Linux'],
      featured: true,
      discontinued: false,
    },
    {
      id: 'esp32-diary',
      name: 'ESP32 Diary',
      eyebrow: 'Embedded system',
      description: 'An offline journal hosted entirely on an ESP32, with its own Wi-Fi network and a responsive web interface that works without cloud services.',
      detail: 'Stores entries in LittleFS and combines C++, WebSockets, captive portal and a lightweight client-side PIN flow.',
      image: '/personal-projects/esp32-diary.png',
      imageAlt: 'ESP32 microcontroller over a blue journal',
      repository: 'https://github.com/ryahconstantino/esp32-diary',
      website: null,
      technologies: ['ESP32', 'C++', 'LittleFS', 'WebSockets'],
      featured: false,
      discontinued: false,
    },
    {
      id: 'sgcp-api',
      name: 'SGCP API',
      eyebrow: 'Command-line tool',
      description: 'A Node.js utility created to query courses and accounts from the SGCP API used by the Via Rápida program.',
      detail: 'The repository remains available as a technical reference, but the project is no longer maintained.',
      image: '/personal-projects/sgcpapi.ico',
      imageAlt: 'SGCP API application icon',
      repository: 'https://github.com/ryahconstantino/sgcpapi',
      website: null,
      technologies: ['Node.js', 'JavaScript', 'Axios', 'CLI'],
      featured: false,
      discontinued: true,
    },
  ],
} : {
  repositoryLabel: 'Ver repositório',
  websiteLabel: 'Abrir site do projeto',
  statusLabel: 'Descontinuado',
  technologiesLabel: 'Tecnologias utilizadas em',
  projects: [
    {
      id: 'deejazz',
      name: 'DeeJazz',
      eyebrow: 'Aplicativo desktop',
      description: 'Um cliente desktop do Deezer para Windows e Linux com integração nativa ao uBlock Origin Lite, filtros cosméticos próprios e recursos do sistema no Linux.',
      detail: 'Oferece pacotes para Windows, Linux x86_64 e ARM64, além de controles de mídia, bandeja do sistema e suporte a Wayland.',
      image: '/personal-projects/deejazz.ico',
      imageAlt: 'Ícone do aplicativo DeeJazz',
      repository: 'https://github.com/ryahconstantino/deejazz',
      website: 'https://ryahconstantino.github.io/deejazz/',
      technologies: ['Electron', 'JavaScript', 'Windows', 'Linux'],
      featured: true,
      discontinued: false,
    },
    {
      id: 'esp32-diary',
      name: 'ESP32 Diary',
      eyebrow: 'Sistema embarcado',
      description: 'Um diário offline hospedado inteiramente em um ESP32, com rede Wi-Fi própria e interface web responsiva que funciona sem serviços em nuvem.',
      detail: 'Armazena os registros no LittleFS e combina C++, WebSockets, captive portal e um fluxo leve de PIN no cliente.',
      image: '/personal-projects/esp32-diary.png',
      imageAlt: 'Microcontrolador ESP32 sobre um diário azul',
      repository: 'https://github.com/ryahconstantino/esp32-diary',
      website: null,
      technologies: ['ESP32', 'C++', 'LittleFS', 'WebSockets'],
      featured: false,
      discontinued: false,
    },
    {
      id: 'sgcp-api',
      name: 'SGCP API',
      eyebrow: 'Ferramenta de linha de comando',
      description: 'Uma ferramenta em Node.js criada para consultar cursos e contas da API do SGCP utilizada pelo programa Via Rápida.',
      detail: 'O repositório continua disponível como referência técnica, mas o projeto não recebe mais manutenção.',
      image: '/personal-projects/sgcpapi.ico',
      imageAlt: 'Ícone do aplicativo SGCP API',
      repository: 'https://github.com/ryahconstantino/sgcpapi',
      website: null,
      technologies: ['Node.js', 'JavaScript', 'Axios', 'CLI'],
      featured: false,
      discontinued: true,
    },
  ],
})
</script>

<template>
  <div class="personal-projects">
    <article
      v-for="(project, index) in content.projects"
      :id="project.id"
      :key="project.name"
      class="personal-project"
      :class="{ 'personal-project--featured': project.featured }"
      :style="{ '--project-index': index }"
    >
      <div class="personal-project__visual">
        <img
          :src="project.image"
          :alt="project.imageAlt"
          width="180"
          height="180"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="personal-project__content">
        <div class="personal-project__meta">
          <p>{{ project.eyebrow }}</p>
          <span v-if="project.discontinued">{{ content.statusLabel }}</span>
        </div>

        <h2>{{ project.name }}</h2>
        <p class="personal-project__description">{{ project.description }}</p>
        <p class="personal-project__detail">{{ project.detail }}</p>

        <ul class="personal-project__technologies" :aria-label="`${content.technologiesLabel} ${project.name}`">
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>

        <div class="personal-project__actions">
          <a :href="project.repository" target="_blank" rel="noreferrer">{{ content.repositoryLabel }}</a>
          <a v-if="project.website" class="personal-project__secondary-link" :href="project.website" target="_blank" rel="noreferrer">
            {{ content.websiteLabel }}
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.personal-projects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-width: 0;
  gap: 18px;
  margin: 30px 0 52px;
}

.personal-project {
  min-width: 0;
  scroll-margin-top: calc(var(--vp-nav-height) + 24px);
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg);
  transition: border-color .3s ease, box-shadow .35s ease, transform .35s cubic-bezier(.22, 1, .36, 1);
}

.personal-project--featured {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: minmax(240px, .78fr) minmax(0, 1.22fr);
}

.personal-project__visual {
  display: grid;
  min-height: 230px;
  place-items: center;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.personal-project--featured .personal-project__visual {
  min-height: 330px;
}

.personal-project__visual img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 18px 28px rgba(15, 23, 42, .16));
  transition: transform .45s cubic-bezier(.22, 1, .36, 1);
}

.personal-project--featured .personal-project__visual img {
  width: 180px;
  height: 180px;
}

.personal-project__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
}

.personal-project--featured .personal-project__content {
  justify-content: center;
  padding: clamp(32px, 5vw, 52px);
}

.personal-project__meta {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.personal-project__meta p {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  line-height: 1.45;
  text-transform: uppercase;
}

.personal-project__meta span {
  flex: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 4px 9px;
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 650;
  line-height: 1.4;
}

.personal-project h2 {
  margin: 12px 0 12px;
  border: 0;
  padding: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: -.035em;
  line-height: 1.12;
}

.personal-project__description,
.personal-project__detail {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.65;
}

.personal-project__description {
  font-size: 15px;
}

.personal-project__detail {
  margin-top: 12px;
  font-size: 13px;
}

.personal-project__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.personal-project__technologies li {
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 5px 10px;
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
}

.personal-project__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

.personal-project__actions a {
  border-radius: 10px;
  background: var(--vp-c-brand-3);
  padding: 9px 15px;
  color: var(--vp-c-white);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
  transition: background-color .22s ease, transform .22s ease;
}

.personal-project__actions .personal-project__secondary-link {
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
}

@media (hover: hover) {
  .personal-project:hover {
    border-color: color-mix(in srgb, var(--vp-c-brand-1) 38%, var(--vp-c-divider));
    box-shadow: 0 18px 44px rgba(15, 23, 42, .09);
    transform: translateY(-4px);
  }

  .personal-project:hover .personal-project__visual img {
    transform: scale(1.045) rotate(-1deg);
  }

  .personal-project__actions a:hover {
    background: var(--vp-c-brand-2);
    color: var(--vp-c-white);
    transform: translateY(-1px);
  }

  .personal-project__actions .personal-project__secondary-link:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .personal-project {
    animation: personal-project-reveal .7s cubic-bezier(.22, 1, .36, 1) both;
    animation-delay: calc(var(--project-index) * 90ms);
  }
}

@keyframes personal-project-reveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .personal-projects {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
    margin-top: 24px;
  }

  .personal-project--featured {
    grid-column: auto;
    grid-template-columns: 1fr;
  }

  .personal-project__visual,
  .personal-project--featured .personal-project__visual {
    min-height: 220px;
  }

  .personal-project__visual img,
  .personal-project--featured .personal-project__visual img {
    width: 144px;
    height: 144px;
  }

  .personal-project__content,
  .personal-project--featured .personal-project__content {
    padding: 24px;
  }
}
</style>
