// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BlogIndex from './BlogIndex.vue'
import CustomTheme from './CustomTheme.vue'
import HomeShowcase from './HomeShowcase.vue'
import PersonalProjectGallery from './PersonalProjectGallery.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectMetric from './ProjectMetric.vue'
import TechnologyBanner from './TechnologyBanner.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: CustomTheme,
  enhanceApp({ app }) {
    app.component('BlogIndex', BlogIndex)
    app.component('HomeShowcase', HomeShowcase)
    app.component('PersonalProjectGallery', PersonalProjectGallery)
    app.component('ProjectGallery', ProjectGallery)
    app.component('ProjectMetric', ProjectMetric)
    app.component('TechnologyBanner', TechnologyBanner)
  },
} satisfies Theme;
