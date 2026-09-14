# Блог на VitePress

VitePress — генератор статических сайтов, преобразующий Markdown в HTML. Он хорошо подходит для блогов и документации.

## Создание проекта

```bash
npm create vitepress@latest my-blog
cd my-blog
npm install
npm run dev
```

## Структура каталогов

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

## Настройка блога

В `.vitepress/config.mts`:

```ts
export default defineConfig({
    srcDir: './src',
    cleanUrls: true,
    themeConfig: {
        nav: [
            {text: 'Главная', link: '/'},
            {text: 'Блог', link: '/blog'},
        ],
        sidebar: [
            {
                text: 'Статьи',
                items: [
                    {text: 'Привет, мир', link: '/posts/hello-world'},
                ]
            }
        ]
    }
})
```

## Написание статьи

Создайте `src/posts/hello-world.md`:

```markdown
# Привет, мир

Моя первая статья в блоге на VitePress!
```

## Подготовка файлов к публикации

Выполните настроенную в проекте команду сборки и опубликуйте выходной каталог на выбранном статическом хостинге:

```bash
npm run build
```

По умолчанию VitePress записывает итоговые файлы в `.vitepress/dist`.

## Дополнительные материалы

[Документация VitePress](https://vitepress.dev).
