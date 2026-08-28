# How to install Laravel

Laravel is a free and open-source PHP framework used to develop web applications, known for its ease of use, clear structure, and features that streamline development.

## Start a Laravel Project

To start a Laravel project, you will need the latest versions of PHP, NodeJS with Yarn or NPM, and Composer. The script below will install PHP, Composer, and Laravel on your local machine. After installation, open and close the Terminal or PowerShell.

:::tip NodeJS with NPM or YARN is required  
[Install NodeJS](https://nodejs.org/en/download)  
:::

**Windows**

````bash
# Run as administrator in PowerShell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
````  

**macOS**

````bash
# Run in Terminal
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
````  

**Linux**

````bash
# Run in Terminal
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
````  

### Creating an Application

````bash
laravel new example-app
cd example-app
npm install && npm run build
composer run dev
````  

Done! Your application will be available at localhost:8000

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
