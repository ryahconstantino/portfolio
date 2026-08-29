<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, lang } = useData()
const isEnglish = computed(() => lang.value === 'en')
const blogPath = computed(() => isEnglish.value ? '/en/blog' : '/blog')
const updatedAt = computed(() => {
  const value = frontmatter.value.modifiedAt

  if (typeof value !== 'string') {
    return ''
  }

  return new Intl.DateTimeFormat(isEnglish.value ? 'en-US' : 'pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(value))
})
</script>

<template>
  <aside class="blog-author" :aria-label="isEnglish ? 'About the author' : 'Sobre o autor'">
    <img src="/ryan-profile.webp" alt="" width="56" height="56" loading="lazy" decoding="async">
    <div class="blog-author__copy">
      <span>{{ isEnglish ? 'Written by' : 'Escrito por' }}</span>
      <a href="/">Ryan Constantino</a>
      <p>
        {{ isEnglish
          ? 'Backend developer and cloud engineer. Technical guides based on practical application work.'
          : 'Desenvolvedor backend e engenheiro de nuvem. Guias técnicos baseados em trabalho prático com aplicações.' }}
      </p>
      <time v-if="updatedAt" :datetime="frontmatter.modifiedAt">
        {{ isEnglish ? 'Updated on' : 'Atualizado em' }} {{ updatedAt }}
      </time>
    </div>
    <a class="blog-author__back" :href="blogPath">
      {{ isEnglish ? 'All guides' : 'Todos os guias' }}
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M4.75 10h10.5m-4-4 4 4-4 4" />
      </svg>
    </a>
  </aside>
</template>

<style scoped>
.blog-author {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  margin-top: 56px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.blog-author > img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}

.blog-author__copy > span,
.blog-author__copy time {
  display: block;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.blog-author__copy > a {
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 750;
  text-decoration: none;
}

.blog-author__copy p {
  margin: 3px 0 6px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.5;
}

.blog-author__back {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.blog-author__back svg {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.blog-author a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
  border-radius: 3px;
}

@media (max-width: 640px) {
  .blog-author {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .blog-author__back {
    grid-column: 2;
  }
}
</style>
