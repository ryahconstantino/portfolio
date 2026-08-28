import {defineConfig} from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            allowedHosts: true,
        },
    },
    sitemap: {
        hostname: 'https://www.ryahconstantino.com'
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
    ],
    transformPageData(pageData) {
        const isEnglish = pageData.relativePath.startsWith('en/')
        const path = pageData.relativePath
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '')
            .replace(/\/$/, '')
        const canonicalUrl = `https://www.ryahconstantino.com${path ? `/${path}` : ''}`
        const fallbackTitle = isEnglish
            ? 'Ryan Constantino | Web systems and cloud for business'
            : 'Ryan Constantino | Sistemas web e cloud para negócios'
        const fallbackDescription = isEnglish
            ? 'Web systems, sales platforms and cloud infrastructure that turn business goals into dependable digital products.'
            : 'Desenvolvimento de sistemas web, plataformas de vendas e infraestrutura cloud para transformar objetivos de negócio em produtos confiáveis.'
        const title = pageData.title || fallbackTitle
        const description = pageData.description || fallbackDescription

        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push(
            ['link', {rel: 'canonical', href: canonicalUrl}],
            ['meta', {property: 'og:url', content: canonicalUrl}],
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: description}],
            ['meta', {property: 'og:locale', content: isEnglish ? 'en_US' : 'pt_BR'}],
            ['meta', {name: 'twitter:title', content: title}],
            ['meta', {name: 'twitter:description', content: description}],
        )
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
                    {text: 'Projetos', link: '/projects'},
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
                                {text: 'Vercel', link: '/technologies#vercel'},
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
                    '/blog': [
                        {
                            text: 'Blog',
                            items: [
                                {text: 'Todos os guias', link: '/blog'},
                            ]
                        },
                        {
                            text: 'PHP',
                            items: [
                                {text: 'Instalar PHP', link: '/php'},
                                {text: 'Instalar Laravel', link: '/laravel'},
                                {text: 'Auth e autorização', link: '/laravel-auth'},
                                {text: 'Usar Filament', link: '/filament'},
                            ]
                        },
                        {
                            text: 'Servidor e infraestrutura',
                            items: [
                                {text: 'Instalar Nginx', link: '/nginx'},
                                {text: 'Usar Bash', link: '/bash'},
                                {text: 'Configurar Cloudflare', link: '/cloudflare'},
                                {text: 'Oracle Cloud Grátis', link: '/oracle-cloud'},
                                {text: 'Google Cloud Grátis', link: '/google-cloud'},
                                {text: 'Hospedar na Vercel', link: '/vercel'},
                                {text: 'Usar FrankenPHP', link: '/frankenphp'},
                                {text: 'Pendrive Linux', link: '/linux-pendrive'},
                            ]
                        },
                        {
                            text: 'Ambiente local',
                            items: [
                                {text: 'Configurar WSL', link: '/wsl'},
                            ]
                        },
                        {
                            text: 'Frontend e documentação',
                            items: [
                                {text: 'Blog com VitePress', link: '/vitepress-blog'},
                            ]
                        }
                    ],
                    '/': [
                        {
                            text: 'PHP',
                            items: [
                                {text: 'Instalar PHP', link: '/php'},
                                {text: 'Instalar Laravel', link: '/laravel'},
                                {text: 'Auth e autorização', link: '/laravel-auth'},
                                {text: 'Usar Filament', link: '/filament'},
                            ]
                        },
                        {
                            text: 'Servidor e infraestrutura',
                            items: [
                                {text: 'Instalar Nginx', link: '/nginx'},
                                {text: 'Configurar Cloudflare', link: '/cloudflare'},
                                {text: 'Usar Bash', link: '/bash'},
                                {text: 'Oracle Cloud Grátis', link: '/oracle-cloud'},
                                {text: 'Google Cloud Grátis', link: '/google-cloud'},
                                {text: 'Usar FrankenPHP', link: '/frankenphp'},
                                {text: 'Hospedar na Vercel', link: '/vercel'},
                                {text: 'Pendrive Linux', link: '/linux-pendrive'},
                            ]
                        },
                        {
                            text: 'Ambiente local',
                            items: [
                                {text: 'Configurar WSL', link: '/wsl'},
                            ]
                        },
                        {
                            text: 'Frontend e documentação',
                            items: [
                                {text: 'Blog com VitePress', link: '/vitepress-blog'},
                            ]
                        },
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
                    {text: 'Projects', link: '/en/projects'},
                    {text: 'Technologies', link: '/en/technologies'},
                    {text: 'Blog', link: '/en/blog'},
                    {text: 'Schedule a call', link: 'https://calendly.com/ryahconstantino/meet-30-min'},
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
                                {text: 'Vercel', link: '/en/technologies#vercel'},
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
                    '/en/blog': [
                        {
                            text: 'Blog',
                            items: [
                                {text: 'All guides', link: '/en/blog'},
                            ]
                        },
                        {
                            text: 'PHP',
                            items: [
                                {text: 'Install PHP', link: '/en/php'},
                                {text: 'Install Laravel', link: '/en/laravel'},
                                {text: 'Auth and authorization', link: '/en/laravel-auth'},
                                {text: 'Use Filament', link: '/en/filament'},
                            ]
                        },
                        {
                            text: 'Server and infrastructure',
                            items: [
                                {text: 'Install Nginx', link: '/en/nginx'},
                                {text: 'Use Bash', link: '/en/bash'},
                                {text: 'Configure Cloudflare', link: '/en/cloudflare'},
                                {text: 'Oracle Cloud Free', link: '/en/oracle-cloud'},
                                {text: 'Google Cloud Free', link: '/en/google-cloud'},
                                {text: 'Host on Vercel', link: '/en/vercel'},
                                {text: 'Use FrankenPHP', link: '/en/frankenphp'},
                                {text: 'Bootable Linux USB', link: '/en/linux-pendrive'},
                            ]
                        },
                        {
                            text: 'Local environment',
                            items: [
                                {text: 'Configure WSL', link: '/en/wsl'},
                            ]
                        },
                        {
                            text: 'Frontend and documentation',
                            items: [
                                {text: 'Blog with VitePress', link: '/en/vitepress-blog'},
                            ]
                        }
                    ],
                    '/en/': [
                        {
                            text: 'PHP',
                            items: [
                                {text: 'Install PHP', link: '/en/php'},
                                {text: 'Install Laravel', link: '/en/laravel'},
                                {text: 'Auth and authorization', link: '/en/laravel-auth'},
                                {text: 'Use Filament', link: '/en/filament'},
                            ]
                        },
                        {
                            text: 'Server and infrastructure',
                            items: [
                                {text: 'Install Nginx', link: '/en/nginx'},
                                {text: 'Configure Cloudflare', link: '/en/cloudflare'},
                                {text: 'Use Bash', link: '/en/bash'},
                                {text: 'Oracle Cloud Free', link: '/en/oracle-cloud'},
                                {text: 'Google Cloud Free', link: '/en/google-cloud'},
                                {text: 'Use FrankenPHP', link: '/en/frankenphp'},
                                {text: 'Host on Vercel', link: '/en/vercel'},
                                {text: 'Bootable Linux USB', link: '/en/linux-pendrive'},
                            ]
                        },
                        {
                            text: 'Local environment',
                            items: [
                                {text: 'Configure WSL', link: '/en/wsl'},
                            ]
                        },
                        {
                            text: 'Frontend and documentation',
                            items: [
                                {text: 'Blog with VitePress', link: '/en/vitepress-blog'},
                            ]
                        },
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
