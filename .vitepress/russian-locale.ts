import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const russianSearch = {
  button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по сайту' },
  modal: {
    displayDetails: 'Показать подробный список',
    resetButtonTitle: 'Очистить поиск',
    backButtonTitle: 'Закрыть поиск',
    noResultsText: 'Ничего не найдено по запросу',
    footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' },
  },
}

export function createRussianLocale(blogSidebar: DefaultTheme.SidebarItem[]): LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link: string } {
  const legal = [
    { text: 'Политика конфиденциальности', link: '/ru/privacy-policy' },
    { text: 'Условия использования', link: '/ru/terms-of-service' },
    { text: 'Удаление данных', link: '/ru/user-data-deletion' },
  ]
  const technologyGroups: [string, [string, string][]][] = [
    ['Языки и фреймворки', [['PHP', 'php'], ['TypeScript', 'typescript'], ['Java', 'java'], ['Laravel', 'laravel'], ['Bagisto', 'bagisto'], ['Vue.js', 'vuejs'], ['React', 'react'], ['jQuery', 'jquery'], ['Tailwind CSS', 'tailwind-css']]],
    ['Данные, очереди и хранение', [['MySQL', 'mysql'], ['MariaDB', 'mariadb'], ['Redis', 'redis'], ['RabbitMQ', 'rabbitmq'], ['Firebase', 'firebase']]],
    ['Облачные сервисы и инфраструктура', [['AWS', 'aws'], ['Google Cloud', 'google-cloud'], ['Oracle Cloud', 'oracle-cloud'], ['Docker', 'docker'], ['Kubernetes', 'kubernetes'], ['Railway', 'railway'], ['Cloudflare', 'cloudflare'], ['Nginx', 'nginx'], ['Linux', 'linux']]],
    ['Автоматизация, поддержка и наблюдаемость', [['n8n', 'n8n'], ['Chatwoot', 'chatwoot'], ['Datadog', 'datadog'], ['Google Analytics 4', 'google-analytics-4'], ['Google Search Console', 'google-search-console']]],
    ['Искусственный интеллект', [['OpenAI', 'openai'], ['DeepSeek', 'deepseek'], ['Инженерия искусственного интеллекта', 'ai-engineering']]],
    ['Продукт, дизайн и совместная работа', [['Figma', 'figma'], ['Linear', 'linear'], ['Git и GitHub', 'git-and-github'], ['VitePress', 'vitepress'], ['WordPress', 'wordpress'], ['Shopify', 'shopify']]],
    ['Критерии архитектуры', [['Посмотреть критерии', 'architecture-criteria']]],
  ]
  return {
    label: 'Русский', lang: 'ru', link: '/ru/',
    title: 'Райан Константино | Веб-системы и облачные решения для бизнеса',
    titleTemplate: ':title | Райан Константино',
    description: 'Веб-системы, платформы продаж и облачная инфраструктура, которые превращают цели бизнеса в надёжные цифровые продукты.',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['meta', { name: 'author', content: 'Райан Константино' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'Райан Константино' }],
      ['meta', { property: 'og:site_name', content: 'Райан Константино' }],
      ['meta', { property: 'og:image', content: 'https://www.ryahconstantino.com/og-image-ru.png' }],
      ['meta', { property: 'og:image:alt', content: 'Райан Константино — веб-системы и облачные решения' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:image', content: 'https://www.ryahconstantino.com/og-image-ru.png' }],
      ['meta', { name: 'twitter:image:alt', content: 'Райан Константино — веб-системы и облачные решения' }],
      ['meta', { name: 'twitter:site', content: '@ryahconstantino' }],
      ['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite',
        name: 'Райан Константино', url: 'https://www.ryahconstantino.com/ru/', inLanguage: 'ru',
        description: 'Веб-системы и облачные решения для бизнеса.',
      })],
    ],
    themeConfig: {
      logo: { light: '/logo-light.svg', dark: '/logo-dark.svg', alt: 'Райан Константино' },
      outline: { label: 'На этой странице' },
      docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
      lastUpdated: { text: 'Обновлено', formatOptions: { dateStyle: 'long', forceLocale: true } },
      darkModeSwitchLabel: 'Оформление', lightModeSwitchTitle: 'Включить светлую тему', darkModeSwitchTitle: 'Включить тёмную тему',
      sidebarMenuLabel: 'Меню', returnToTopLabel: 'Наверх', langMenuLabel: 'Выбрать язык', skipToContentLabel: 'Перейти к содержимому',
      notFound: { title: 'Страница не найдена', quote: 'Проверьте адрес или вернитесь на главную страницу.', linkLabel: 'Перейти на главную', linkText: 'На главную' },
      nav: [
        { text: 'Главная', link: '/ru/' },
        { text: 'Проекты', items: [{ text: 'Разборы проектов', link: '/ru/projects' }, { text: 'Личные проекты', link: '/ru/personal-projects' }] },
        { text: 'Технологии', link: '/ru/technologies' },
        { text: 'Блог', link: '/ru/blog' },
        { text: 'Договориться о встрече', link: 'https://calendly.com/ryahconstantino/meet-30-min' },
        { text: 'Правовая информация', items: legal },
      ],
      sidebar: {
        '/ru/personal-projects': [{ text: 'Личные проекты', items: [
          { text: 'ДиДжаз', link: '/ru/personal-projects#deejazz' },
          { text: 'Дневник ESP32', link: '/ru/personal-projects#esp32-diary' },
          { text: 'API SGCP', link: '/ru/personal-projects#sgcp-api' },
        ] }],
        '/ru/projects': [{ text: 'Разборы проектов', items: [
          { text: 'Все проекты', link: '/ru/projects' },
          { text: 'Система ВайтПлан', link: '/ru/projects/viteplan' },
          { text: 'Сим Консейту', link: '/ru/projects/sim-conceito' },
          { text: 'Моура Мультикар', link: '/ru/projects/moura-multicar' },
          { text: 'Р энд Р Адвокатура', link: '/ru/projects/rr-advocacia' },
          { text: 'Сим Писинас', link: '/ru/projects/simpiscinas' },
          { text: 'Йес Писинас', link: '/ru/projects/yespiscinas' },
        ] }],
        '/ru/technologies': technologyGroups.map(([text, items]) => ({ text, items: items.map(([text, anchor]) => ({ text, link: `/ru/technologies#${anchor}` })) })),
        '/ru/blog': blogSidebar,
        '/ru/': [{ text: 'Правовая информация', items: legal }],
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/ryahconstantino', ariaLabel: 'Райан Константино в GitHub' },
        { icon: 'whatsapp', link: 'https://wa.me/5512996488381', ariaLabel: 'Написать в WhatsApp' },
        { icon: 'linkedin', link: 'https://linkedin.com/in/ryahconstantino', ariaLabel: 'Райан Константино в LinkedIn' },
      ],
      footer: {
        message: 'Опубликовано по <a href="https://opensource.org/license/mit">лицензии MIT</a>.',
        copyright: `Все права защищены © ${new Date().getFullYear()} <a href="https://github.com/ryahconstantino">Райан Константино</a>`,
      },
    },
  }
}
