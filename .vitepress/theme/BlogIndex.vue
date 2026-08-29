<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { blogPosts, type BlogCategory } from '../blog-posts'

const { lang } = useData()
const isEnglish = computed(() => lang.value === 'en')

const categoryOrder: BlogCategory[] = ['php', 'server', 'local', 'frontend']
const postsByCategory = computed(() => {
  const language = isEnglish.value ? 'en' : 'pt'
  const posts = blogPosts.filter((post) => post.language === language)

  return categoryOrder.map((category) => ({
    category,
    label: posts.find((post) => post.category === category)?.categoryLabel ?? category,
    posts: posts.filter((post) => post.category === category),
  }))
})

function formatDate(value: string) {
  return new Intl.DateTimeFormat(isEnglish.value ? 'en-US' : 'pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(value))
}
</script>

<template>
  <div class="blog-catalog">
    <section
      v-for="group in postsByCategory"
      :key="group.category"
      class="blog-catalog__section"
      :aria-labelledby="`blog-category-${group.category}`"
    >
      <div class="blog-catalog__heading">
        <h2 :id="`blog-category-${group.category}`">{{ group.label }}</h2>
        <span>{{ group.posts.length }} {{ isEnglish ? (group.posts.length === 1 ? 'guide' : 'guides') : (group.posts.length === 1 ? 'guia' : 'guias') }}</span>
      </div>

      <div class="blog-catalog__grid">
        <a v-for="post in group.posts" :key="post.path" class="blog-card" :href="post.path">
          <article>
            <time :datetime="post.modifiedAt">
              {{ isEnglish ? 'Updated' : 'Atualizado' }} {{ formatDate(post.modifiedAt) }}
            </time>
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <span class="blog-card__link">
              {{ isEnglish ? 'Read guide' : 'Ler guia' }}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4.75 10h10.5m-4-4 4 4-4 4" />
              </svg>
            </span>
          </article>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-catalog {
  display: grid;
  gap: 52px;
  margin-top: 40px;
}

.blog-catalog__section {
  margin: 0;
}

.blog-catalog__heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.blog-catalog__heading h2 {
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--vp-c-text-1);
  font-size: 20px;
  letter-spacing: -0.025em;
}

.blog-catalog__heading > span {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.blog-catalog__grid {
  display: grid;
  gap: 12px;
}

.blog-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 72%, transparent);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.blog-card article {
  padding: 22px;
}

.blog-card time {
  display: block;
  margin-bottom: 8px;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 600;
}

.blog-card h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.blog-card p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.65;
}

.blog-card__link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 16px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
}

.blog-card__link svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
  transition: transform 0.2s ease;
}

.blog-card:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 45%, var(--vp-c-divider));
  background: var(--vp-c-bg-soft);
  box-shadow: 0 14px 34px color-mix(in srgb, var(--vp-c-brand-1) 9%, transparent);
  transform: translateY(-2px);
}

.blog-card:hover .blog-card__link svg {
  transform: translateX(3px);
}

.blog-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

@media (max-width: 768px) {
  .blog-catalog {
    gap: 42px;
    margin-top: 32px;
  }

  .blog-card article {
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .blog-card,
  .blog-card__link svg {
    transition: none;
  }
}
</style>
