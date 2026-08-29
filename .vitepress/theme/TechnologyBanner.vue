<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  category: string
}>()

const logos: Record<string, string> = {
  'PHP': '/technologies/php.svg',
  'TypeScript': '/technologies/typescript.svg',
  'Java': '/technologies/openjdk.svg',
  'Laravel': '/technologies/laravel.svg',
  'Bagisto': '/technologies/bagisto.svg',
  'Vue.js': '/technologies/vuejs.svg',
  'React': '/technologies/react.svg',
  'jQuery': '/technologies/jquery.svg',
  'Tailwind CSS': '/technologies/tailwindcss.svg',
  'MySQL': '/technologies/mysql.svg',
  'MariaDB': '/technologies/mariadb.svg',
  'Redis': '/technologies/redis.svg',
  'RabbitMQ': '/technologies/rabbitmq.svg',
  'Firebase': '/technologies/firebase.svg',
  'AWS': '/technologies/aws.svg',
  'Google Cloud': '/technologies/google-cloud.svg',
  'Oracle Cloud': '/technologies/oracle.svg',
  'Docker': '/technologies/docker.svg',
  'Kubernetes': '/technologies/kubernetes.svg',
  'Railway': '/technologies/railway.svg',
  'Cloudflare': '/technologies/cloudflare.svg',
  'Nginx': '/technologies/nginx.svg',
  'Linux': '/technologies/linux.svg',
  'n8n': '/technologies/n8n.svg',
  'Chatwoot': '/technologies/chatwoot.svg',
  'Datadog': '/technologies/datadog.svg',
  'Google Analytics 4': '/technologies/google-analytics.svg',
  'Google Search Console': '/technologies/google-search-console.svg',
  'OpenAI': '/technologies/openai.svg',
  'DeepSeek': '/technologies/deepseek.svg',
  'Figma': '/technologies/figma.svg',
  'Linear': '/technologies/linear.svg',
  'Git e GitHub': '/technologies/git-github.svg',
  'Git and GitHub': '/technologies/git-github.svg',
  'VitePress': '/technologies/vitepress.svg',
  'WordPress': '/technologies/wordpress.svg',
  'Shopify': '/technologies/shopify.svg',
}

const logo = computed(() => logos[props.name])
</script>

<template>
  <div class="technology-banner">
    <div class="technology-banner__brand">
      <img v-if="logo" :src="logo" :alt="`${name} logo`" loading="lazy" />
      <span v-else class="technology-banner__fallback" aria-hidden="true">&lt;/&gt;</span>
      <strong>{{ name }}</strong>
    </div>
    <span class="technology-banner__category">{{ category }}</span>
  </div>
</template>

<style scoped>
.technology-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 96px;
  margin: 24px 0 18px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px 24px;
  background: linear-gradient(110deg, #1e293b, #263b63 60%, #304d7b);
  color: #fff;
}

.technology-banner::after {
  width: 180px;
  height: 180px;
  margin-right: -48px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  content: '';
}

.technology-banner__brand {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.technology-banner__brand img {
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  object-fit: contain;
}

.technology-banner__brand strong {
  font-size: 22px;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}

.technology-banner__category {
  position: relative;
  z-index: 1;
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.technology-banner__fallback {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
}

@media (max-width: 768px) {
  .technology-banner {
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    min-height: 120px;
    padding: 18px;
  }

  .technology-banner::after {
    position: absolute;
    top: 50%;
    right: -24px;
    width: 90px;
    height: 90px;
    margin-right: 0;
    transform: translateY(-50%);
  }

  .technology-banner__category {
    margin-left: 58px;
  }
}
</style>
