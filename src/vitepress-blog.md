# Blog com VitePress

VitePress é um gerador de sites estáticos que transforma Markdown em HTML. Ideal para blogs e documentações.

## Criar projeto

```bash
npm create vitepress@latest meu-blog
cd meu-blog
npm install
npm run dev
```

## Estrutura de pastas

```
meu-blog/
├── .vitepress/
│   └── config.mts
├── public/
├── src/
│   ├── index.md
│   ├── blog.md
│   └── posts/
│       └── hello-world.md
└── package.json
```

## Configurar blog

No `.vitepress/config.mts`:

```ts
export default defineConfig({
    srcDir: './src',
    cleanUrls: true,
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Blog', link: '/blog'},
        ],
        sidebar: [
            {
                text: 'Posts',
                items: [
                    {text: 'Hello World', link: '/posts/hello-world'},
                ]
            }
        ]
    }
})
```

## Escrever um post

Crie `src/posts/hello-world.md`:

```markdown
# Hello World

Meu primeiro post no blog com VitePress!
```

## Fazer deploy na Vercel

1. Conecte o repositório na Vercel
2. Framework: VitePress
3. Build command: `npm run build`
4. Output: `src/.vitepress/dist`

## Mais

Documentação: [vitepress.dev](https://vitepress.dev)
