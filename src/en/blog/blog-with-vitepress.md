# Blog with VitePress

VitePress is a static site generator that converts Markdown to HTML. Perfect for blogs and documentation.

## Create project

```bash
npm create vitepress@latest my-blog
cd my-blog
npm install
npm run dev
```

## Folder structure

```
my-blog/
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

## Configure blog

In `.vitepress/config.mts`:

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

## Write a post

Create `src/posts/hello-world.md`:

```markdown
# Hello World

My first blog post with VitePress!
```

## Generate files for deployment

Run the build command configured by the project and publish the output directory to your chosen static hosting service:

```bash
npm run build
```

By default, VitePress writes the final files to `.vitepress/dist`.

## More

Documentation: [vitepress.dev](https://vitepress.dev)
