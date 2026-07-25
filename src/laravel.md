# Como instalar o Laravel

O Laravel é um framework PHP de código aberto e gratuito, utilizado para desenvolver aplicações web,
conhecido pela sua facilidade de uso, estrutura clara e recursos que agilizam o desenvolvimento.

## Iniciar um projeto Laravel

Para iniciar um projeto Laravel você irá precisar do PHP, NodeJS com Yarn ou NPM e Composer mais recentes, o script 
abaixo irá instalar o PHP, Composer e Laravel na sua máquina local, após a instalação abra e feche
o Terminal ou Powershell.

:::tip NodeJS com NPM ou YARN é necessário
[Instalar NodeJS](https://nodejs.org/en/download)
:::

**Windows**

````bash
# Execute como administrador no PowerShell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
````

**macOS**

````bash
# Execute no Terminal
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
````

**Linux**

````bash
# Execute no Terminal
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
````

### Criando uma Aplicação

````bash
laravel new app-exemplo
cd app-exemplo
npm install && npm run build
composer run dev
````

Pronto! Sua aplicação estará disponível no endereço localhost:8000


## Instalar Laravel no cPanel

Para instalar no cPanel, que utiliza Apache, crie os arquivos .htaccess e compacte todo o projeto 
(incluindo o vendor e node_modules) e envie para o servidor na pasta public_html.

Ou crie um deploy com hooks dentro do cPanel utilizando o Git™ Version Control.

1. Crie um arquivo chamado .htaccess dentro da pasta principal do projeto e cole o XML abaixo 

````xml{4}
<IfModule mod_rewrite.c>
RewriteEngine On

# Mude o website.com para o nome do seu domínio
RewriteCond %{HTTP_HOST} ^website.com [NC]
RewriteRule ^(.*)$ https://website.com/$1 [L,R=301]
    
RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
````

2. Crie um arquivo chamado .htaccess dentro da pasta /public do projeto e cole o XML abaixo

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

:::tip Configure o SSL corretamente
[Configurar SSL no CloudFlare](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/)

[Configurar SSL no cPanel](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/)
:::

## Mais

Encontre a documentação oficial em [Instalação do Laravel](https://laravel.com/docs/installation)
