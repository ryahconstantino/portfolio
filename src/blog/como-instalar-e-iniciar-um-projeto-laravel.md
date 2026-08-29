# Como instalar e iniciar um projeto Laravel

Laravel é um framework PHP para aplicações web, APIs e produtos digitais. Para começar, instale PHP, Composer e Node.js compatíveis com a versão do framework escolhida.

## Criar uma aplicação

O instalador oficial conduz a escolha de starter kit, banco e opções de autenticação. Em uma máquina preparada, crie o projeto e entre na pasta:

```bash
laravel new app-exemplo
cd app-exemplo
```

Instale os pacotes do front-end, aplique as migrations e inicie o ambiente local:

```bash
npm install
npm run build
php artisan migrate
composer run dev
```

Abra o endereço exibido pelo comando, normalmente `http://localhost:8000`.

## Autenticação desde o início

Ao criar o projeto, escolha um starter kit oficial se login, cadastro, recuperação de senha e verificação de e-mail fizerem parte do produto. O código fica dentro da aplicação e pode ser adaptado ao fluxo de negócio.

Depois de configurar o banco, execute as migrations antes de testar o cadastro. Para áreas privadas, proteja as rotas com os middlewares `auth` e, quando necessário, `verified`:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/painel', DashboardController::class);
});
```

Leia o guia dedicado de [autenticação e autorização no Laravel](autenticacao-e-autorizacao-no-laravel.md) antes de publicar uma área restrita.

## Painéis administrativos com Filament

Filament é uma boa opção para backoffice em Laravel: recursos administrativos, formulários, tabelas, filtros e widgets podem ficar separados da experiência do cliente. Use políticas e permissões para definir quem pode visualizar, criar, editar ou excluir dados; esconder um botão não substitui autorização no servidor.

O guia [Como usar o Filament](como-usar-o-filament.md) mostra a instalação, a estrutura de painéis e os primeiros resources.


## Instalar Laravel no cPanel

Para instalar no cPanel, que utiliza Apache, crie os arquivos .htaccess e compacte todo o projeto 
(incluindo o vendor e node_modules) e envie para o servidor na pasta public_html.

Ou crie um deploy com hooks dentro do cPanel utilizando o Git Version Control.

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
