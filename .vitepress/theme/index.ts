// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomTheme from './CustomTheme.vue'
import HomeShowcase from './HomeShowcase.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectMetric from './ProjectMetric.vue'
import TechnologyBanner from './TechnologyBanner.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: CustomTheme,
  enhanceApp({ app }) {
    app.component('HomeShowcase', HomeShowcase)
    app.component('ProjectGallery', ProjectGallery)
    app.component('ProjectMetric', ProjectMetric)
    app.component('TechnologyBanner', TechnologyBanner)
  },
} satisfies Theme;
