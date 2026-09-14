# Как установить и запустить проект Laravel

Laravel — фреймворк PHP для веб-приложений, API и цифровых продуктов. Перед началом установите версии PHP, Composer и Node.js, совместимые с выбранным выпуском Laravel.

## Создание приложения

Официальный установщик помогает выбрать стартовый набор, базу данных и аутентификацию. На подготовленном компьютере создайте проект и перейдите в его каталог:

```bash
laravel new example-app
cd example-app
```

Установите зависимости клиентской части, выполните миграции и запустите локальную среду:

```bash
npm install
npm run build
php artisan migrate
composer run dev
```

Откройте адрес, показанный командой, обычно `http://localhost:8000`.

## Аутентификация с самого начала

Если продукту нужны вход, регистрация, восстановление пароля и подтверждение электронной почты, выберите официальный стартовый набор при создании проекта. Сгенерированный код принадлежит приложению и может быть адаптирован к его деловым процессам.

Защитите закрытые разделы промежуточными обработчиками `auth` и, при необходимости, `verified`:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', DashboardController::class);
});
```

Перед запуском закрытого раздела прочитайте [руководство по аутентификации и авторизации Laravel](laravel-authentication-and-authorization.md).

## Административные панели с Filament

Filament — практичный вариант административной части Laravel. Политиками и разрешениями определяйте, кто может читать и менять данные; скрытая кнопка никогда не заменяет серверную авторизацию.

[Руководство по Filament](how-to-use-filament.md) описывает установку, панели и первые ресурсы.

## Установка Laravel на cPanel

Чтобы установить Laravel на cPanel с Apache, создайте файлы `.htaccess`, упакуйте весь проект, включая `vendor` и `node_modules`, и загрузите его в каталог `public_html` на сервере.

Вместо этого можно настроить развёртывание через обработчики событий системы контроля версий Git в cPanel.

1. Создайте файл `.htaccess` в корневом каталоге проекта и вставьте следующую конфигурацию:

````xml{4}
<IfModule mod_rewrite.c>
RewriteEngine On

# Замените website.com своим доменным именем
RewriteCond %{HTTP_HOST} ^website.com [NC]
RewriteRule ^(.*)$ https://website.com/$1 [L,R=301]
    
RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
````

2. Создайте файл `.htaccess` в каталоге `/public` проекта и вставьте следующую конфигурацию:

````xml
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Обработка заголовка авторизации
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
````

:::tip Правильно настройте SSL
[Настройка SSL в Cloudflare](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/)

[Настройка SSL в cPanel](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
:::

## Дополнительные материалы

[Официальная документация по установке Laravel](https://laravel.com/docs/installation).
