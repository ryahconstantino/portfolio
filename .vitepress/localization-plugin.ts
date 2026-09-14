import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'

// These default-theme accessibility strings have no VitePress locale options.
// Transform the components at build time so SSR and client navigation agree,
// without editing dependencies or patching the DOM after hydration.
export function localizationPlugin(): Plugin {
  const languageComposable = fileURLToPath(new URL('./theme/use-localized-langs.ts', import.meta.url))
  const replacements: Record<string, [string, string]> = {
    'VPNavBarMenu.vue': ['Main Navigation', "{{ uiLang === 'ru' ? 'Основная навигация' : 'Main Navigation' }}"],
    'VPSidebar.vue': ['Sidebar Navigation', "{{ uiLang === 'ru' ? 'Боковая навигация' : 'Sidebar Navigation' }}"],
    'VPDocFooter.vue': ['>Pager<', ">{{ uiLang === 'ru' ? 'Навигация по страницам' : 'Pager' }}<"],
    'VPNavBarExtra.vue': ['label="extra navigation"', ':label="uiLang === \'ru\' ? \'Дополнительная навигация\' : \'extra navigation\'"'],
    'VPNavBarHamburger.vue': ['aria-label="mobile navigation"', ':aria-label="uiLang === \'ru\' ? \'Мобильная навигация\' : \'mobile navigation\'"'],
  }
  return {
    name: 'site-localized-theme',
    enforce: 'pre',
    transform(source, id) {
      if (!id.includes('/vitepress/dist/client/theme-default/components/') || !id.endsWith('.vue')) return
      let code = source.replace("from '../composables/langs'", `from ${JSON.stringify(languageComposable)}`)
      const replacement = replacements[id.slice(id.lastIndexOf('/') + 1)]
      if (replacement) {
        code = code.replace(replacement[0], replacement[1]).replace(/(<script[^>]*>)/, '$1\nimport { useData as useLocaleData } from "vitepress"\nconst { lang: uiLang } = useLocaleData()\n')
      }
      if (code !== source) return { code, map: null }
    },
  }
}
