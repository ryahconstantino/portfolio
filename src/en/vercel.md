# Host on Vercel

Vercel is a free deployment platform for static sites and frontend apps. Perfect for personal projects and portfolios.

## Quick deploy (CLI)

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be live in seconds.

## Deploy via Git

1. Create an account at [vercel.com](https://vercel.com)
2. Connect your GitHub/GitLab
3. Import the repository
4. Select the framework (or choose Other)
5. Configure build command and output directory
6. Deploy

## Deploy without CLI or Git

Use Vercel CLI with:

```bash
vercel --prod
```

## Custom domain

Go to Settings > Domains and add your domain. Vercel manages SSL automatically.

## Compatible projects

- **VitePress / VuePress** - blog/docs
- **React / Next.js** - apps
- **Vue / Nuxt** - SPA
- **Static HTML** - landing pages
- **Astro, Hugo, Jekyll** - SSG

## Free plan limits

- 100 GB bandwidth
- 100 deploys/day
- Automatic SSL
- Edge Functions (100k req/day)
- Analytics (2.5k visits/month)

## More

Documentation: [vercel.com/docs](https://vercel.com/docs)
