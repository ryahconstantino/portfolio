# Personal Portfolio 2025

## Microsoft Clarity

The Microsoft Clarity Project ID `y9rpbafhbw` is configured as the website default. Clarity is loaded only after the visitor accepts cookies and telemetry, and remains disabled when consent is denied.

To replace the public Project ID for another environment, copy `.env.example` to `.env.local` or configure the same variable in the deployment platform:

```dotenv
CLARITY_PROJECT_ID=y9rpbafhbw
```

The consent choice is stored under `ryan.telemetry-consent.v1`. Accepted telemetry is communicated through Clarity Consent API V2 with advertising storage denied.

## Blog URLs and SEO

Blog posts use descriptive routes under `/blog/` and `/en/blog/`. Their titles, summaries, publication dates, language pairs and legacy paths are centralized in `.vitepress/blog-posts.ts`; use that catalog when adding or changing a post so the index, sidebars, JSON-LD and sitemap remain aligned.

The production build generates `sitemap.xml`, and `src/public/robots.txt` advertises its public URL. Legacy article paths are redirected by the local Vite development server.
