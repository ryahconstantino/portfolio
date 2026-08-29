export type BlogLanguage = 'pt' | 'en'
export type BlogCategory = 'php' | 'server' | 'local' | 'frontend'

export interface BlogPost {
  source: string
  path: string
  legacyPath: string
  alternatePath: string
  language: BlogLanguage
  category: BlogCategory
  categoryLabel: string
  title: string
  description: string
  publishedAt: string
  modifiedAt: string
}

interface LocalizedPost {
  source: string
  path: string
  legacyPath: string
  categoryLabel: string
  title: string
  description: string
}

interface BlogPostPair {
  category: BlogCategory
  publishedAt: string
  modifiedAt: string
  pt: LocalizedPost
  en: LocalizedPost
}

const pairs: BlogPostPair[] = [
  {
    category: 'php',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/como-instalar-o-php.md',
      path: '/blog/como-instalar-o-php',
      legacyPath: '/php',
      categoryLabel: 'PHP',
      title: 'Como instalar o PHP',
      description: 'Aprenda a instalar PHP no Debian, Ubuntu, RHEL, Windows e macOS, conferir a versão e preparar seu ambiente de desenvolvimento web.',
    },
    en: {
      source: 'en/blog/how-to-install-php.md',
      path: '/en/blog/how-to-install-php',
      legacyPath: '/en/php',
      categoryLabel: 'PHP',
      title: 'How to install PHP',
      description: 'Learn how to install PHP on Debian, Ubuntu, RHEL, Windows and macOS, verify the version and prepare a web development environment.',
    },
  },
  {
    category: 'php',
    publishedAt: '2025-03-14T02:12:54-03:00',
    modifiedAt: '2026-08-28T01:23:25-03:00',
    pt: {
      source: 'blog/como-instalar-e-iniciar-um-projeto-laravel.md',
      path: '/blog/como-instalar-e-iniciar-um-projeto-laravel',
      legacyPath: '/laravel',
      categoryLabel: 'PHP',
      title: 'Como instalar e iniciar um projeto Laravel',
      description: 'Aprenda a criar um projeto Laravel, configurar autenticação e banco de dados, integrar Filament e preparar a aplicação para publicação.',
    },
    en: {
      source: 'en/blog/how-to-install-and-start-a-laravel-project.md',
      path: '/en/blog/how-to-install-and-start-a-laravel-project',
      legacyPath: '/en/laravel',
      categoryLabel: 'PHP',
      title: 'How to install and start a Laravel project',
      description: 'Learn how to create a Laravel project, configure authentication and a database, integrate Filament and prepare the application for deployment.',
    },
  },
  {
    category: 'php',
    publishedAt: '2026-08-28T01:23:25-03:00',
    modifiedAt: '2026-08-28T01:23:25-03:00',
    pt: {
      source: 'blog/autenticacao-e-autorizacao-no-laravel.md',
      path: '/blog/autenticacao-e-autorizacao-no-laravel',
      legacyPath: '/laravel-auth',
      categoryLabel: 'PHP',
      title: 'Autenticação e autorização no Laravel',
      description: 'Entenda autenticação e autorização no Laravel usando starter kits, middlewares, policies, verificação de e-mail e práticas de segurança.',
    },
    en: {
      source: 'en/blog/laravel-authentication-and-authorization.md',
      path: '/en/blog/laravel-authentication-and-authorization',
      legacyPath: '/en/laravel-auth',
      categoryLabel: 'PHP',
      title: 'Laravel authentication and authorization',
      description: 'Understand Laravel authentication and authorization using starter kits, middleware, policies, email verification and security practices.',
    },
  },
  {
    category: 'php',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-08-28T01:23:25-03:00',
    pt: {
      source: 'blog/como-usar-o-filament.md',
      path: '/blog/como-usar-o-filament',
      legacyPath: '/filament',
      categoryLabel: 'PHP',
      title: 'Como usar o Filament',
      description: 'Aprenda a instalar o Filament, criar resources, organizar painéis administrativos e aplicar autorização em projetos Laravel.',
    },
    en: {
      source: 'en/blog/how-to-use-filament.md',
      path: '/en/blog/how-to-use-filament',
      legacyPath: '/en/filament',
      categoryLabel: 'PHP',
      title: 'How to use Filament',
      description: 'Learn how to install Filament, create resources, organize administration panels and apply authorization in Laravel projects.',
    },
  },
  {
    category: 'server',
    publishedAt: '2025-03-14T02:12:54-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/como-instalar-o-nginx.md',
      path: '/blog/como-instalar-o-nginx',
      legacyPath: '/nginx',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Como instalar o Nginx',
      description: 'Instale o Nginx em distribuições Linux e configure proxy reverso, HTTPS, segurança e entrega de aplicações web.',
    },
    en: {
      source: 'en/blog/how-to-install-nginx.md',
      path: '/en/blog/how-to-install-nginx',
      legacyPath: '/en/nginx',
      categoryLabel: 'Server and infrastructure',
      title: 'How to install Nginx',
      description: 'Install Nginx on Linux distributions and configure reverse proxy, HTTPS, security and web application delivery.',
    },
  },
  {
    category: 'server',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/como-usar-o-bash.md',
      path: '/blog/como-usar-o-bash',
      legacyPath: '/bash',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Como usar o Bash',
      description: 'Conheça comandos, permissões, scripts, loops e condicionais essenciais para automatizar tarefas com Bash no Linux e macOS.',
    },
    en: {
      source: 'en/blog/how-to-use-bash.md',
      path: '/en/blog/how-to-use-bash',
      legacyPath: '/en/bash',
      categoryLabel: 'Server and infrastructure',
      title: 'How to use Bash',
      description: 'Learn essential commands, permissions, scripts, loops and conditionals to automate tasks with Bash on Linux and macOS.',
    },
  },
  {
    category: 'server',
    publishedAt: '2025-03-14T02:12:54-03:00',
    modifiedAt: '2026-08-28T00:44:03-03:00',
    pt: {
      source: 'blog/como-configurar-o-cloudflare.md',
      path: '/blog/como-configurar-o-cloudflare',
      legacyPath: '/cloudflare',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Como configurar o Cloudflare',
      description: 'Configure nameservers, DNS, proxy, SSL e regras de segurança do Cloudflare para proteger e acelerar seu site.',
    },
    en: {
      source: 'en/blog/how-to-configure-cloudflare.md',
      path: '/en/blog/how-to-configure-cloudflare',
      legacyPath: '/en/cloudflare',
      categoryLabel: 'Server and infrastructure',
      title: 'How to configure Cloudflare',
      description: 'Configure Cloudflare nameservers, DNS, proxy, SSL and security rules to protect and accelerate your website.',
    },
  },
  {
    category: 'server',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/oracle-cloud-gratis.md',
      path: '/blog/oracle-cloud-gratis',
      legacyPath: '/oracle-cloud',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Oracle Cloud Grátis',
      description: 'Conheça os recursos gratuitos da Oracle Cloud, crie máquinas virtuais, conecte por SSH e configure portas de rede.',
    },
    en: {
      source: 'en/blog/oracle-cloud-free-tier.md',
      path: '/en/blog/oracle-cloud-free-tier',
      legacyPath: '/en/oracle-cloud',
      categoryLabel: 'Server and infrastructure',
      title: 'Oracle Cloud Free Tier',
      description: 'Explore Oracle Cloud free resources, create virtual machines, connect over SSH and configure network ports.',
    },
  },
  {
    category: 'server',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/google-cloud-gratis.md',
      path: '/blog/google-cloud-gratis',
      legacyPath: '/google-cloud',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Google Cloud Grátis',
      description: 'Conheça o nível gratuito do Google Cloud e aprenda a criar uma VM, conectar por SSH e usar o Cloud Storage.',
    },
    en: {
      source: 'en/blog/google-cloud-free-tier.md',
      path: '/en/blog/google-cloud-free-tier',
      legacyPath: '/en/google-cloud',
      categoryLabel: 'Server and infrastructure',
      title: 'Google Cloud Free Tier',
      description: 'Explore the Google Cloud free tier and learn how to create a VM, connect over SSH and use Cloud Storage.',
    },
  },
  {
    category: 'server',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/como-usar-o-frankenphp.md',
      path: '/blog/como-usar-o-frankenphp',
      legacyPath: '/frankenphp',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Como usar o FrankenPHP',
      description: 'Instale e configure o FrankenPHP, use workers e Caddyfile e publique aplicações PHP com um servidor moderno.',
    },
    en: {
      source: 'en/blog/how-to-use-frankenphp.md',
      path: '/en/blog/how-to-use-frankenphp',
      legacyPath: '/en/frankenphp',
      categoryLabel: 'Server and infrastructure',
      title: 'How to use FrankenPHP',
      description: 'Install and configure FrankenPHP, use workers and a Caddyfile, and serve PHP applications with a modern application server.',
    },
  },
  {
    category: 'server',
    publishedAt: '2026-08-28T01:23:25-03:00',
    modifiedAt: '2026-08-28T01:23:25-03:00',
    pt: {
      source: 'blog/criar-um-pendrive-bootavel-linux-debian-ubuntu-e-rocky-linux.md',
      path: '/blog/criar-um-pendrive-bootavel-linux-debian-ubuntu-e-rocky-linux',
      legacyPath: '/linux-pendrive',
      categoryLabel: 'Servidor e infraestrutura',
      title: 'Criar um pendrive bootável Linux: Debian, Ubuntu e Rocky Linux',
      description: 'Crie com segurança um pendrive bootável para instalar Debian, Ubuntu ou Rocky Linux no Windows, macOS ou Linux.',
    },
    en: {
      source: 'en/blog/create-a-bootable-linux-usb-debian-ubuntu-and-rocky-linux.md',
      path: '/en/blog/create-a-bootable-linux-usb-debian-ubuntu-and-rocky-linux',
      legacyPath: '/en/linux-pendrive',
      categoryLabel: 'Server and infrastructure',
      title: 'Create a bootable Linux USB: Debian, Ubuntu and Rocky Linux',
      description: 'Safely create a bootable USB to install Debian, Ubuntu or Rocky Linux from Windows, macOS or Linux.',
    },
  },
  {
    category: 'local',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/configurar-wsl-no-windows-11.md',
      path: '/blog/configurar-wsl-no-windows-11',
      legacyPath: '/wsl',
      categoryLabel: 'Ambiente local',
      title: 'Configurar WSL no Windows 11',
      description: 'Instale e configure o WSL 2 no Windows 11, escolha distribuições Linux e aprenda os comandos essenciais de gerenciamento.',
    },
    en: {
      source: 'en/blog/configure-wsl-on-windows-11.md',
      path: '/en/blog/configure-wsl-on-windows-11',
      legacyPath: '/en/wsl',
      categoryLabel: 'Local environment',
      title: 'Configure WSL on Windows 11',
      description: 'Install and configure WSL 2 on Windows 11, choose Linux distributions and learn essential management commands.',
    },
  },
  {
    category: 'frontend',
    publishedAt: '2026-07-25T13:06:49-03:00',
    modifiedAt: '2026-07-25T13:06:49-03:00',
    pt: {
      source: 'blog/blog-com-vitepress.md',
      path: '/blog/blog-com-vitepress',
      legacyPath: '/vitepress-blog',
      categoryLabel: 'Frontend e documentação',
      title: 'Blog com VitePress',
      description: 'Crie um blog com VitePress usando Markdown, navegação, sidebar, tema personalizado, build estático e publicação.',
    },
    en: {
      source: 'en/blog/blog-with-vitepress.md',
      path: '/en/blog/blog-with-vitepress',
      legacyPath: '/en/vitepress-blog',
      categoryLabel: 'Frontend and documentation',
      title: 'Blog with VitePress',
      description: 'Create a VitePress blog with Markdown, navigation, a sidebar, theme customization, static builds and deployment.',
    },
  },
]

export const blogPosts: BlogPost[] = pairs.flatMap((pair) => [
  {
    ...pair.pt,
    alternatePath: pair.en.path,
    language: 'pt' as const,
    category: pair.category,
    publishedAt: pair.publishedAt,
    modifiedAt: pair.modifiedAt,
  },
  {
    ...pair.en,
    alternatePath: pair.pt.path,
    language: 'en' as const,
    category: pair.category,
    publishedAt: pair.publishedAt,
    modifiedAt: pair.modifiedAt,
  },
])

export const blogPostBySource = new Map(blogPosts.map((post) => [post.source, post]))
export const blogPostByPath = new Map(blogPosts.map((post) => [post.path, post]))
export const legacyBlogRedirects = Object.fromEntries(blogPosts.map((post) => [post.legacyPath, post.path]))
