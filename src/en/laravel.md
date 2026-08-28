# How to install and start a Laravel project

Laravel is a PHP framework for web applications, APIs and digital products. Before starting, install PHP, Composer and Node.js versions compatible with the Laravel release you intend to use.

## Create an application

The official installer guides you through starter-kit, database and authentication choices. On a prepared machine, create the project and enter its folder:

```bash
laravel new example-app
cd example-app
```

Install front-end dependencies, run the migrations and start the local environment:

```bash
npm install
npm run build
php artisan migrate
composer run dev
```

Open the address shown by the command, usually `http://localhost:8000`.

## Authentication from the start

When the product needs login, registration, password recovery and email verification, choose an official starter kit while creating the project. The generated code belongs to your application and can be adapted to its business flow.

Protect private areas with `auth` and, when applicable, `verified` middleware:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', DashboardController::class);
});
```

Read the dedicated [Laravel authentication and authorization guide](laravel-auth.md) before releasing a private area.

## Administrative panels with Filament

Filament is a practical option for a Laravel back office. Use policies and permissions to define who may read or change data; hiding a button never replaces server-side authorization.

The [Filament guide](filament.md) covers installation, panels and the first resources.

## Install Laravel on cPanel

To install Laravel on cPanel, which uses Apache, create the `.htaccess` files, compress the entire project (including `vendor` and `node_modules`), and upload it to the `public_html` directory on your server.

Alternatively, you can set up a deployment using Git Version Control hooks within cPanel.

1. Create a file named `.htaccess` inside the project's root directory and paste the following XML:

````xml{4}
<IfModule mod_rewrite.c>
RewriteEngine On

# Change website.com to your domain name
RewriteCond %{HTTP_HOST} ^website.com [NC]
RewriteRule ^(.*)$ https://website.com/$1 [L,R=301]
    
RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
````  

2. Create a file named `.htaccess` inside the `/public` directory of the project and paste the following XML:

````xml
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
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

:::tip Properly configure SSL  
[Configure SSL on Cloudflare](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/)

[Configure SSL on cPanel](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)  
:::

## More

Find the official documentation at [Laravel Installation](https://laravel.com/docs/installation)
