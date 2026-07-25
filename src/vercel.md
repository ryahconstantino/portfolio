# Hospedar na Vercel

Vercel é uma plataforma de deploy gratuito para sites estáticos e frontend. Perfeita para projetos pessoais e portfólios.

## Deploy rápido (CLI)

```bash
npm install -g vercel
vercel
```

Siga as instruções e seu site estará no ar em segundos.

## Deploy via Git

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu GitHub/GitLab
3. Importe o repositório
4. Selecione o framework (ou escolha Other)
5. Configure build command e output directory
6. Deploy

## Deploy sem CLI nem Git

Use o Vercel CLI com:

```bash
vercel --prod
```

## Dominio personalizado

Vá em Settings > Domains e adicione seu domínio. A Vercel gerencia SSL automaticamente.

## Projetos compatíveis

- **VitePress / VuePress** - blog/docs
- **React / Next.js** - apps
- **Vue / Nuxt** - SPA
- **HTML estático** - landing pages
- **Astro, Hugo, Jekyll** - SSG

## Limites do plano gratuito

- 100 GB de bandwidth
- 100 deploys/dia
- SSL automático
- Edge Functions (100k req/dia)
- Analytics (2.5k visitas/mês)

## Mais

Documentação: [vercel.com/docs](https://vercel.com/docs)
