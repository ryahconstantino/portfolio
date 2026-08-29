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

## Gerar os arquivos para publicação

Execute o comando de build configurado no projeto e publique o diretório de saída na hospedagem estática escolhida:

```bash
npm run build
```

No padrão do VitePress, os arquivos finais ficam em `.vitepress/dist`.

## Mais

Documentação: [vitepress.dev](https://vitepress.dev)
