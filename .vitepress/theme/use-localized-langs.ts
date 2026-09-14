import { computed } from 'vue'
import { useData } from 'vitepress'

// VitePress assumes all translated articles have the same slug. This site uses
// Portuguese slugs alongside shared English/Russian slugs, so use explicit paths.
export function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, lang, hash } = useData()
  const label = (key: string, fallback: string) => lang.value === 'ru'
    ? ({ root: 'Португальский', en: 'Английский', ru: 'Русский' }[key] ?? fallback)
    : fallback
  const currentLang = computed(() => ({
    label: label(localeIndex.value, site.value.locales[localeIndex.value]?.label ?? ''),
    link: site.value.locales[localeIndex.value]?.link ?? '/',
  }))
  const localeLinks = computed(() => Object.entries(site.value.locales)
    .filter(([key]) => key !== localeIndex.value)
    .map(([key, value]) => {
      const code = key === 'root' ? 'pt' : key
      const home = value.link ?? (key === 'root' ? '/' : `/${key}/`)
      const path = correspondingLink ? page.value.frontmatter.alternatePaths?.[code] ?? home : home
      const anchor = page.value.relativePath.endsWith('personal-projects.md') ? hash.value : ''
      return { text: label(key, value.label ?? key), link: `${path}${anchor}` }
    }))
  return { currentLang, localeLinks }
}
