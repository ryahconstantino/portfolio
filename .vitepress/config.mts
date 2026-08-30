import {defineConfig, type HeadConfig} from 'vitepress'
import {loadEnv, type Plugin} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {blogPostByPath, blogPostBySource, blogPosts, legacyBlogRedirects, type BlogLanguage} from './blog-posts'

const siteUrl = 'https://www.ryahconstantino.com'
const blogCategoryOrder = ['php', 'server', 'local', 'frontend'] as const

function createBlogSidebar(language: BlogLanguage) {
    const posts = blogPosts.filter((post) => post.language === language)

    return [
        {
            text: 'Blog',
            items: [
                {text: language === 'en' ? 'All guides' : 'Todos os guias', link: language === 'en' ? '/en/blog' : '/blog'},
            ],
        },
        ...blogCategoryOrder.map((category) => ({
            text: posts.find((post) => post.category === category)?.categoryLabel ?? category,
            items: posts
                .filter((post) => post.category === category)
                .map((post) => ({text: post.title, link: post.path})),
        })),
    ]
}

function legacyBlogRedirectPlugin(): Plugin {
    return {
        name: 'legacy-blog-redirects',
        configureServer(server) {
            server.middlewares.use((request, response, next) => {
                const [pathname = '/', query] = (request.url ?? '/').split('?')
                const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
                const destination = legacyBlogRedirects[normalizedPath]

                if (!destination) {
                    next()
                    return
                }

                response.statusCode = 308
                response.setHeader('Location', `${destination}${query ? `?${query}` : ''}`)
                response.end()
            })
        },
    }
}

const portugueseBlogSidebar = createBlogSidebar('pt')
const englishBlogSidebar = createBlogSidebar('en')

const environment = loadEnv(
    process.env.NODE_ENV === 'production' ? 'production' : 'development',
    process.cwd(),
    '',
)
const defaultClarityProjectId = 'y9rpbafhbw'
const clarityProjectId = environment.CLARITY_PROJECT_ID?.trim() || defaultClarityProjectId
const clarityHead: HeadConfig[] = clarityProjectId && /^[a-z0-9_-]+$/i.test(clarityProjectId)
    ? [['meta', {name: 'clarity-project-id', content: clarityProjectId}]]
    : []

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        plugins: [
            legacyBlogRedirectPlugin(),
            tailwindcss(),
        ],
        server: {
            allowedHosts: true,
        },
    },
    sitemap: {
        hostname: siteUrl,
        transformItems(items) {
            return items.map((item) => {
                const path = `/${item.url}`.replace(/\/$/, '') || '/'
                const post = blogPostByPath.get(path)

                if (!post) {
                    return item
                }

                const portuguesePath = post.language === 'pt' ? post.path : post.alternatePath
                const englishPath = post.language === 'en' ? post.path : post.alternatePath

                return {
                    ...item,
                    lastmod: post.modifiedAt,
                    links: [
                        {lang: 'pt-BR', url: portuguesePath.slice(1)},
                        {lang: 'en', url: englishPath.slice(1)},
                        {lang: 'x-default', url: portuguesePath.slice(1)},
                    ],
                }
            })
        },
    },
    srcDir: './src',
    markdown: {
        languageAlias: {
            caddy: 'nginx',
        },
    },
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['meta', {name: 'author', content: 'Ryan Constantino'}],
        ['meta', {name: 'robots', content: 'index, follow, max-image-preview:large'}],
        ['meta', {name: 'theme-color', content: '#243d8e'}],
        ...clarityHead,
    ],
    transformPageData(pageData) {
        const isEnglish = pageData.relativePath.startsWith('en/')
        const blogPost = blogPostBySource.get(pageData.relativePath)
        const isBlogIndex = pageData.relativePath === 'blog.md' || pageData.relativePath === 'en/blog.md'
        const isPersonalProjects = pageData.relativePath === 'personal-projects.md' || pageData.relativePath === 'en/personal-projects.md'
        const path = pageData.relativePath
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '')
            .replace(/\/$/, '')
        const canonicalUrl = `${siteUrl}${path ? `/${path}` : ''}`
        const fallbackTitle = isEnglish
            ? 'Ryan Constantino | Web systems and cloud for business'
            : 'Ryan Constantino | Sistemas web e cloud para negócios'
        const fallbackDescription = isEnglish
            ? 'Web systems, sales platforms and cloud infrastructure that turn business goals into dependable digital products.'
            : 'Desenvolvimento de sistemas web, plataformas de vendas e infraestrutura cloud para transformar objetivos de negócio em produtos confiáveis.'
        const title = blogPost?.title || pageData.title || fallbackTitle
        const description = blogPost?.description || pageData.description || fallbackDescription

        pageData.description = description
        pageData.frontmatter.description = description

        if (blogPost || isBlogIndex) {
            pageData.frontmatter.titleTemplate = ':title | Ryan Constantino'
        }

        pageData.frontmatter.head = (pageData.frontmatter.head ?? []).filter((entry: HeadConfig) =>
            !(entry[0] === 'link' && entry[1]?.rel === 'canonical')
        )
        pageData.frontmatter.head.push(
            ['link', {id: 'canonical', rel: 'canonical', href: canonicalUrl}],
            ['meta', {property: 'og:url', content: canonicalUrl}],
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: description}],
            ['meta', {property: 'og:locale', content: isEnglish ? 'en_US' : 'pt_BR'}],
            ['meta', {property: 'og:type', content: blogPost ? 'article' : 'website'}],
            ['meta', {name: 'twitter:title', content: title}],
            ['meta', {name: 'twitter:description', content: description}],
        )

        if (blogPost) {
            const portuguesePath = blogPost.language === 'pt' ? blogPost.path : blogPost.alternatePath
            const englishPath = blogPost.language === 'en' ? blogPost.path : blogPost.alternatePath
            const blogPath = isEnglish ? '/en/blog' : '/blog'

            pageData.frontmatter.blogPost = true
            pageData.frontmatter.category = blogPost.categoryLabel
            pageData.frontmatter.publishedAt = blogPost.publishedAt
            pageData.frontmatter.modifiedAt = blogPost.modifiedAt
            pageData.frontmatter.head.push(
                ['meta', {property: 'article:published_time', content: blogPost.publishedAt}],
                ['meta', {property: 'article:modified_time', content: blogPost.modifiedAt}],
                ['meta', {property: 'article:section', content: blogPost.categoryLabel}],
                ['meta', {property: 'og:locale:alternate', content: isEnglish ? 'pt_BR' : 'en_US'}],
                ['link', {id: 'alternate-pt', rel: 'alternate', hreflang: 'pt-BR', href: `${siteUrl}${portuguesePath}`}],
                ['link', {id: 'alternate-en', rel: 'alternate', hreflang: 'en', href: `${siteUrl}${englishPath}`}],
                ['link', {id: 'alternate-default', rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${portuguesePath}`}],
                ['script', {id: 'blog-post-structured-data', type: 'application/ld+json'}, JSON.stringify({
                    '@context': 'https://schema.org',
                    '@graph': [
                        {
                            '@type': 'BlogPosting',
                            '@id': `${canonicalUrl}#article`,
                            mainEntityOfPage: {'@type': 'WebPage', '@id': canonicalUrl},
                            headline: blogPost.title,
                            description: blogPost.description,
                            image: [`${siteUrl}/og-image-desktop.png`],
                            datePublished: blogPost.publishedAt,
                            dateModified: blogPost.modifiedAt,
                            inLanguage: isEnglish ? 'en' : 'pt-BR',
                            articleSection: blogPost.categoryLabel,
                            author: {
                                '@type': 'Person',
                                name: 'Ryan Constantino',
                                url: siteUrl,
                                sameAs: [
                                    'https://github.com/ryahconstantino',
                                    'https://linkedin.com/in/ryahconstantino',
                                    'https://x.com/ryahconstantino',
                                ],
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'Ryan Constantino',
                                url: siteUrl,
                                logo: {
                                    '@type': 'ImageObject',
                                    url: `${siteUrl}/web-app-manifest-512x512.png`,
                                },
                            },
                        },
                        {
                            '@type': 'BreadcrumbList',
                            '@id': `${canonicalUrl}#breadcrumb`,
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Blog',
                                    item: `${siteUrl}${blogPath}`,
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: blogPost.title,
                                    item: canonicalUrl,
                                },
                            ],
                        },
                    ],
                })],
            )
        }

        if (isBlogIndex) {
            const language = isEnglish ? 'en' : 'pt'
            const localizedPosts = blogPosts.filter((post) => post.language === language)

            pageData.frontmatter.head.push(
                ['link', {id: 'alternate-pt', rel: 'alternate', hreflang: 'pt-BR', href: `${siteUrl}/blog`}],
                ['link', {id: 'alternate-en', rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en/blog`}],
                ['link', {id: 'alternate-default', rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/blog`}],
                ['script', {id: 'blog-structured-data', type: 'application/ld+json'}, JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Blog',
                    '@id': `${canonicalUrl}#blog`,
                    name: title,
                    description,
                    url: canonicalUrl,
                    inLanguage: isEnglish ? 'en' : 'pt-BR',
                    publisher: {
                        '@type': 'Organization',
                        name: 'Ryan Constantino',
                        url: siteUrl,
                    },
                    blogPost: localizedPosts.map((post) => ({
                        '@type': 'BlogPosting',
                        headline: post.title,
                        url: `${siteUrl}${post.path}`,
                        dateModified: post.modifiedAt,
                    })),
                })],
            )
        }

        if (isPersonalProjects) {
            const portugueseUrl = `${siteUrl}/personal-projects`
            const englishUrl = `${siteUrl}/en/personal-projects`
            const repositories = [
                {
                    name: 'DeeJazz',
                    description: isEnglish
                        ? 'Desktop Deezer client for Windows and Linux with built-in uBlock Origin Lite integration.'
                        : 'Cliente desktop do Deezer para Windows e Linux com integração nativa ao uBlock Origin Lite.',
                    repository: 'https://github.com/ryahconstantino/deejazz',
                    languages: ['HTML', 'JavaScript'],
                },
                {
                    name: 'ESP32 Diary',
                    description: isEnglish
                        ? 'Offline journal hosted entirely on an ESP32 microcontroller.'
                        : 'Diário offline hospedado inteiramente em um microcontrolador ESP32.',
                    repository: 'https://github.com/ryahconstantino/esp32-diary',
                    languages: ['C++', 'HTML', 'JavaScript'],
                },
                {
                    name: 'SGCP API',
                    description: isEnglish
                        ? 'Discontinued Node.js utility for querying courses and accounts from the SGCP API.'
                        : 'Ferramenta descontinuada em Node.js para consultar cursos e contas da API do SGCP.',
                    repository: 'https://github.com/ryahconstantino/sgcpapi',
                    languages: ['JavaScript'],
                },
            ]

            pageData.frontmatter.titleTemplate = ':title | Ryan Constantino'
            pageData.frontmatter.head.push(
                ['link', {id: 'alternate-pt', rel: 'alternate', hreflang: 'pt-BR', href: portugueseUrl}],
                ['link', {id: 'alternate-en', rel: 'alternate', hreflang: 'en', href: englishUrl}],
                ['link', {id: 'alternate-default', rel: 'alternate', hreflang: 'x-default', href: portugueseUrl}],
                ['script', {id: 'personal-projects-structured-data', type: 'application/ld+json'}, JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    '@id': `${canonicalUrl}#collection`,
                    name: title,
                    description,
                    url: canonicalUrl,
                    inLanguage: isEnglish ? 'en' : 'pt-BR',
                    author: {
                        '@type': 'Person',
                        name: 'Ryan Constantino',
                        url: siteUrl,
                        sameAs: ['https://github.com/ryahconstantino'],
                    },
                    mainEntity: {
                        '@type': 'ItemList',
                        numberOfItems: repositories.length,
                        itemListElement: repositories.map((repository, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            item: {
                                '@type': 'SoftwareSourceCode',
                                name: repository.name,
                                description: repository.description,
                                codeRepository: repository.repository,
                                programmingLanguage: repository.languages,
                                author: {
                                    '@type': 'Person',
                                    name: 'Ryan Constantino',
                                    url: siteUrl,
                                },
                            },
                        })),
                    },
                })],
            )
        }
    },
    locales: {
        root: {
            title: "Ryan Constantino | Sistemas web e cloud para negócios",
            description: "Desenvolvimento de sistemas web, plataformas de vendas e infraestrutura cloud para transformar objetivos de negócio em produtos confiáveis.",
            label: 'Português',
            lang: 'pt',
            head: [
                // Favicon & Manifests
                ['link', {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'}],
                ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
                ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
                ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
                ['meta', {name: 'apple-mobile-web-app-title', content: 'Ryan Constantino'}],

                // Open Graph Desktop
                ['meta', {property: 'og:site_name', content: 'Ryan Constantino'}],
                ['meta', {property: 'og:title', content: 'Ryan Constantino - Desenvolvedor Backend'}],
                ['meta', {
                    property: 'og:description',
                    content: 'Desenvolvimento de sistemas, lojas ou sites, que trazem retornos significativos em seus negócios.'
                }],
                ['meta', {property: 'og:image', content: 'https://www.ryahconstantino.com/og-image-desktop.png'}],
                ['meta', {property: 'og:image:width', content: '1200'}],
                ['meta', {property: 'og:image:height', content: '630'}],
                ['meta', {property: 'og:image:alt', content: 'Banner'}],
                ['meta', {property: 'og:type', content: 'website'}],
                ['meta', {property: 'og:url', content: 'https://www.ryahconstantino.com'}],

                // Twitter Cards
                ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
                ['meta', {name: 'twitter:title', content: 'Ryan Constantino - Desenvolvedor Backend'}],
                ['meta', {
                    name: 'twitter:description',
                    content: 'Desenvolvimento de sistemas, lojas ou sites, que trazem retornos significativos em seus negócios.'
                }],
                ['meta', {name: 'twitter:image', content: 'https://www.ryahconstantino.com/og-image-desktop.png'}],
                ['meta', {name: 'twitter:image:alt', content: 'Banner'}],
                ['meta', {name: 'twitter:site', content: '@ryahconstantino'}],

                // JSON-LD (Google Structured Data)
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Ryan Constantino - Desenvolvedor Backend",
                    "url": "https://www.ryahconstantino.com",
                    "description": "Desenvolvimento de sistemas, lojas ou sites, que trazem retornos significativos em seus negócios.",
                    "image": "https://www.ryahconstantino.com/og-image-desktop.png",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Ryan Constantino",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.ryahconstantino.com/web-app-manifest-512x512.png"
                        }
                    }
                })]
            ],
            themeConfig: {
                darkModeSwitchLabel: "Tema Claro/Escuro",
                returnToTopLabel: "Retonar ao topo",
                lastUpdated: {
                    text: "Última atualização",
                    formatOptions: {
                        dateStyle: "short",
                        timeStyle: "short",
                        timeZone: "America/Sao_Paulo",
                        forceLocale: true,
                    },
                },
                outline: {
                    label: "Nessa Página"
                },
                docFooter: {
                    prev: "Voltar página",
                    next: "Proxima página",
                },
                nav: [
                    {text: 'Início', link: '/'},
                    {
                        text: 'Projetos',
                        items: [
                            {text: 'Cases de projetos', link: '/projects'},
                            {text: 'Projetos pessoais', link: '/personal-projects'},
                        ],
                    },
                    {text: 'Tecnologias', link: '/technologies'},
                    {text: 'Blog', link: '/blog'},
                    {text: 'Agendar conversa', link: 'https://calendly.com/ryahconstantino/meet-30-min'},
                    {
                        text: 'Legal',
                        items: [
                            {text: 'Política de Privacidade', link: '/privacy-policy'},
                            {text: 'Termos de Serviço', link: '/terms-of-service'},
                            {text: 'Exclusão de Dados', link: '/user-data-deletion'},
                        ]
                    }
                ],
                sidebar: {
                    '/personal-projects': [
                        {
                            text: 'Projetos pessoais',
                            items: [
                                {text: 'DeeJazz', link: '/personal-projects#deejazz'},
                                {text: 'ESP32 Diary', link: '/personal-projects#esp32-diary'},
                                {text: 'SGCP API', link: '/personal-projects#sgcp-api'},
                            ],
                        },
                    ],
                    '/projects': [
                        {
                            text: 'Cases de projetos',
                            items: [
                                {text: 'Todos os projetos', link: '/projects'},
                                {text: 'Sistema VitePlan', link: '/projects/viteplan'},
                                {text: 'Sim Conceito', link: '/projects/sim-conceito'},
                                {text: 'Moura Multicar', link: '/projects/moura-multicar'},
                                {text: 'R & R Advocacia', link: '/projects/rr-advocacia'},
                                {text: 'Sim Piscinas', link: '/projects/simpiscinas'},
                                {text: 'Yes Piscinas', link: '/projects/yespiscinas'},
                            ]
                        }
                    ],
                    '/technologies': [
                        {
                            text: 'Linguagens e frameworks',
                            items: [
                                {text: 'PHP', link: '/technologies#php'},
                                {text: 'TypeScript', link: '/technologies#typescript'},
                                {text: 'Java', link: '/technologies#java'},
                                {text: 'Laravel', link: '/technologies#laravel'},
                                {text: 'Bagisto', link: '/technologies#bagisto'},
                                {text: 'Vue.js', link: '/technologies#vuejs'},
                                {text: 'React', link: '/technologies#react'},
                                {text: 'jQuery', link: '/technologies#jquery'},
                                {text: 'Tailwind CSS', link: '/technologies#tailwind-css'},
                            ]
                        },
                        {
                            text: 'Dados, filas e armazenamento',
                            items: [
                                {text: 'MySQL', link: '/technologies#mysql'},
                                {text: 'MariaDB', link: '/technologies#mariadb'},
                                {text: 'Redis', link: '/technologies#redis'},
                                {text: 'RabbitMQ', link: '/technologies#rabbitmq'},
                                {text: 'Firebase', link: '/technologies#firebase'},
                            ]
                        },
                        {
                            text: 'Cloud, infraestrutura e entrega',
                            items: [
                                {text: 'AWS', link: '/technologies#aws'},
                                {text: 'Google Cloud', link: '/technologies#google-cloud'},
                                {text: 'Oracle Cloud', link: '/technologies#oracle-cloud'},
                                {text: 'Docker', link: '/technologies#docker'},
                                {text: 'Kubernetes', link: '/technologies#kubernetes'},
                                {text: 'Railway', link: '/technologies#railway'},
                                {text: 'Cloudflare', link: '/technologies#cloudflare'},
                                {text: 'Nginx', link: '/technologies#nginx'},
                                {text: 'Linux', link: '/technologies#linux'},
                            ]
                        },
                        {
                            text: 'Automação, atendimento e observabilidade',
                            items: [
                                {text: 'n8n', link: '/technologies#n8n'},
                                {text: 'Chatwoot', link: '/technologies#chatwoot'},
                                {text: 'Datadog', link: '/technologies#datadog'},
                                {text: 'Google Analytics 4', link: '/technologies#google-analytics-4'},
                                {text: 'Google Search Console', link: '/technologies#google-search-console'},
                            ]
                        },
                        {
                            text: 'Inteligência artificial',
                            items: [
                                {text: 'OpenAI', link: '/technologies#openai'},
                                {text: 'DeepSeek', link: '/technologies#deepseek'},
                                {text: 'Engenharia de IA', link: '/technologies#engenharia-de-ia'},
                            ]
                        },
                        {
                            text: 'Produto, design e colaboração',
                            items: [
                                {text: 'Figma', link: '/technologies#figma'},
                                {text: 'Linear', link: '/technologies#linear'},
                                {text: 'Git e GitHub', link: '/technologies#git-e-github'},
                                {text: 'VitePress', link: '/technologies#vitepress'},
                                {text: 'WordPress', link: '/technologies#wordpress'},
                                {text: 'Shopify', link: '/technologies#shopify'},
                            ]
                        },
                        {
                            text: 'Critérios de arquitetura',
                            items: [
                                {text: 'Ver critérios', link: '/technologies#criterios-de-arquitetura'},
                            ]
                        }
                    ],
                    '/blog': portugueseBlogSidebar,
                    '/': [
                        {
                            text: 'Legal',
                            items: [
                                {text: 'Política de Privacidade', link: '/privacy-policy'},
                                {text: 'Termos de Serviço', link: '/terms-of-service'},
                                {text: 'Exclusão de Dados', link: '/user-data-deletion'},
                            ]
                        }
                    ]
                },
                footer: {
                    message: 'Lançado sob <a href="https://opensource.org/license/mit">Licença MIT</a>.',
                    copyright: 'Direitos Reservados © ' + new Date().getFullYear() + ' <a href="https://github.com/ryahconstantino">Ryan Constantino</a>'
                }
            },
        },
        en: {
            title: "Ryan Constantino | Web systems and cloud for business",
            description: "Web systems, sales platforms and cloud infrastructure that turn business goals into dependable digital products.",
            label: 'English',
            lang: 'en',
            link: '/en',
            head: [
                // Favicon & Manifests
                ['link', {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'}],
                ['link', {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}],
                ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
                ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
                ['meta', {name: 'apple-mobile-web-app-title', content: 'Ryan Constantino'}],

                // Open Graph Desktop
                ['meta', {property: 'og:site_name', content: 'Ryan Constantino'}],
                ['meta', {property: 'og:title', content: 'Ryan Constantino - Backend Developer'}],
                ['meta', {
                    property: 'og:description',
                    content: 'Development of systems, stores, or websites that will bring significant returns to your business.'
                }],
                ['meta', {property: 'og:image', content: 'https://www.ryahconstantino.com/og-image-desktop.png'}],
                ['meta', {property: 'og:image:width', content: '1200'}],
                ['meta', {property: 'og:image:height', content: '630'}],
                ['meta', {property: 'og:image:alt', content: 'Banner'}],
                ['meta', {property: 'og:type', content: 'website'}],
                ['meta', {property: 'og:url', content: 'https://www.ryahconstantino.com/en'}],

                // Twitter Cards
                ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
                ['meta', {name: 'twitter:title', content: 'Ryan Constantino - Backend Developer'}],
                ['meta', {
                    name: 'twitter:description',
                    content: 'Development of systems, stores, or websites that will bring significant returns to your business.'
                }],
                ['meta', {name: 'twitter:image', content: 'https://www.ryahconstantino.com/og-image-desktop.png'}],
                ['meta', {name: 'twitter:image:alt', content: 'Banner'}],
                ['meta', {name: 'twitter:site', content: '@ryahconstantino'}],

                // JSON-LD (Google Structured Data)
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Ryan Constantino - Backend Developer",
                    "url": "https://www.ryahconstantino.com/en",
                    "description": "Development of systems, stores, or websites that will bring significant returns to your business.",
                    "image": "https://www.ryahconstantino.com/og-image-desktop.png",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Ryan Constantino",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.ryahconstantino.com/web-app-manifest-512x512.png"
                        }
                    }
                })]
            ],
            themeConfig: {
                darkModeSwitchLabel: "Theme Light/Dark",
                nav: [
                    {text: 'Home', link: '/en'},
                    {
                        text: 'Projects',
                        items: [
                            {text: 'Project cases', link: '/en/projects'},
                            {text: 'Personal projects', link: '/en/personal-projects'},
                        ],
                    },
                    {text: 'Technologies', link: '/en/technologies'},
                    {text: 'Blog', link: '/en/blog'},
                    {text: 'Schedule a conversation', link: 'https://calendly.com/ryahconstantino/meet-30-min'},
                    {
                        text: 'Legal',
                        items: [
                            {text: 'Privacy Policy', link: '/en/privacy-policy'},
                            {text: 'Terms of Service', link: '/en/terms-of-service'},
                            {text: 'User Data Deletion', link: '/en/user-data-deletion'},
                        ]
                    }
                ],
                sidebar: {
                    '/en/personal-projects': [
                        {
                            text: 'Personal projects',
                            items: [
                                {text: 'DeeJazz', link: '/en/personal-projects#deejazz'},
                                {text: 'ESP32 Diary', link: '/en/personal-projects#esp32-diary'},
                                {text: 'SGCP API', link: '/en/personal-projects#sgcp-api'},
                            ],
                        },
                    ],
                    '/en/projects': [
                        {
                            text: 'Project cases',
                            items: [
                                {text: 'All projects', link: '/en/projects'},
                                {text: 'VitePlan System', link: '/en/projects/viteplan'},
                                {text: 'Sim Conceito', link: '/en/projects/sim-conceito'},
                                {text: 'Moura Multicar', link: '/en/projects/moura-multicar'},
                                {text: 'R & R Advocacia', link: '/en/projects/rr-advocacia'},
                                {text: 'Sim Piscinas', link: '/en/projects/simpiscinas'},
                                {text: 'Yes Piscinas', link: '/en/projects/yespiscinas'},
                            ]
                        }
                    ],
                    '/en/technologies': [
                        {
                            text: 'Languages and frameworks',
                            items: [
                                {text: 'PHP', link: '/en/technologies#php'},
                                {text: 'TypeScript', link: '/en/technologies#typescript'},
                                {text: 'Java', link: '/en/technologies#java'},
                                {text: 'Laravel', link: '/en/technologies#laravel'},
                                {text: 'Bagisto', link: '/en/technologies#bagisto'},
                                {text: 'Vue.js', link: '/en/technologies#vuejs'},
                                {text: 'React', link: '/en/technologies#react'},
                                {text: 'jQuery', link: '/en/technologies#jquery'},
                                {text: 'Tailwind CSS', link: '/en/technologies#tailwind-css'},
                            ]
                        },
                        {
                            text: 'Data, queues and storage',
                            items: [
                                {text: 'MySQL', link: '/en/technologies#mysql'},
                                {text: 'MariaDB', link: '/en/technologies#mariadb'},
                                {text: 'Redis', link: '/en/technologies#redis'},
                                {text: 'RabbitMQ', link: '/en/technologies#rabbitmq'},
                                {text: 'Firebase', link: '/en/technologies#firebase'},
                            ]
                        },
                        {
                            text: 'Cloud, infrastructure and delivery',
                            items: [
                                {text: 'AWS', link: '/en/technologies#aws'},
                                {text: 'Google Cloud', link: '/en/technologies#google-cloud'},
                                {text: 'Oracle Cloud', link: '/en/technologies#oracle-cloud'},
                                {text: 'Docker', link: '/en/technologies#docker'},
                                {text: 'Kubernetes', link: '/en/technologies#kubernetes'},
                                {text: 'Railway', link: '/en/technologies#railway'},
                                {text: 'Cloudflare', link: '/en/technologies#cloudflare'},
                                {text: 'Nginx', link: '/en/technologies#nginx'},
                                {text: 'Linux', link: '/en/technologies#linux'},
                            ]
                        },
                        {
                            text: 'Automation, support and observability',
                            items: [
                                {text: 'n8n', link: '/en/technologies#n8n'},
                                {text: 'Chatwoot', link: '/en/technologies#chatwoot'},
                                {text: 'Datadog', link: '/en/technologies#datadog'},
                                {text: 'Google Analytics 4', link: '/en/technologies#google-analytics-4'},
                                {text: 'Google Search Console', link: '/en/technologies#google-search-console'},
                            ]
                        },
                        {
                            text: 'Artificial intelligence',
                            items: [
                                {text: 'OpenAI', link: '/en/technologies#openai'},
                                {text: 'DeepSeek', link: '/en/technologies#deepseek'},
                                {text: 'AI engineering', link: '/en/technologies#ai-engineering'},
                            ]
                        },
                        {
                            text: 'Product, design and collaboration',
                            items: [
                                {text: 'Figma', link: '/en/technologies#figma'},
                                {text: 'Linear', link: '/en/technologies#linear'},
                                {text: 'Git and GitHub', link: '/en/technologies#git-and-github'},
                                {text: 'VitePress', link: '/en/technologies#vitepress'},
                                {text: 'WordPress', link: '/en/technologies#wordpress'},
                                {text: 'Shopify', link: '/en/technologies#shopify'},
                            ]
                        },
                        {
                            text: 'Architecture criteria',
                            items: [
                                {text: 'View criteria', link: '/en/technologies#architecture-criteria'},
                            ]
                        }
                    ],
                    '/en/blog': englishBlogSidebar,
                    '/en/': [
                        {
                            text: 'Legal',
                            items: [
                                {text: 'Privacy Policy', link: '/en/privacy-policy'},
                                {text: 'Terms of Service', link: '/en/terms-of-service'},
                                {text: 'User Data Deletion', link: '/en/user-data-deletion'},
                            ]
                        }
                    ]
                },
                footer: {
                    message: 'Released under the <a href="https://opensource.org/license/mit">MIT License</a>.',
                    copyright: 'Copyright © ' + new Date().getFullYear() + ' <a href="https://github.com/ryahconstantino">Ryan Constantino</a>'
                }
            },
        },
    },
    themeConfig: {
        siteTitle: false,
        logo: {
            light: '/logo-light.svg',
            dark: '/logo-dark.svg',
            alt: 'Logo Ryan Constantino'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Pesquisar',
                                buttonAriaLabel: 'Pesquisar'
                            },
                            modal: {
                                noResultsText: 'Sem resultados para',
                                resetButtonTitle: 'Limpar',
                                displayDetails: 'Mostrar detalhes',
                                footer: {
                                    selectText: 'para navegar',
                                    navigateText: 'para selecionar',
                                    closeText: 'para fechar',
                                }
                            }
                        }
                    }
                }
            }
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ryahconstantino'},
            {icon: 'whatsapp', link: 'https://wa.me/5512996488381'},
            {icon: 'linkedin', link: 'https://linkedin.com/in/ryahconstantino'},
        ]
    },
})
