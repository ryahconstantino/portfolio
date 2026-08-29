# Como usar o Filament

Filament é um framework de painéis administrativos para Laravel. Ele organiza CRUDs, tabelas, formulários, filtros, ações e dashboards sem misturar as regras administrativas com o site público.

## Instalação

Em uma aplicação Laravel já conectada ao banco, instale o painel e crie o primeiro usuário administrativo:

```bash
composer require filament/filament:"^5.0"
php artisan filament:install --panels
php artisan make:filament-user
```

O instalador cria o provider do painel, normalmente em `app/Providers/Filament/AdminPanelProvider.php`, e o painel padrão fica em `/admin`.

## Criar um resource

Um resource reúne as telas de lista, criação e edição de um model Eloquent. Para iniciar o CRUD de produtos:

```bash
php artisan make:filament-resource Product
```

Defina campos, colunas e filtros em torno das regras do domínio. Para catálogo, por exemplo, trate preço, estoque, status e publicação como dados validados no servidor — não apenas como campos visíveis no painel.

## Separe painéis e permissões

É comum ter um painel administrativo em `/admin` e outro para operadores em `/app`. Crie um painel adicional quando os públicos tiverem permissões e navegação diferentes:

```bash
php artisan make:filament-panel app
```

Use policies do Laravel e verificações de autorização nos resources, páginas e ações. O usuário deve ser impedido de executar operações sem permissão mesmo que tente chamar uma URL diretamente.

## Dashboard e relações

Widgets ajudam a mostrar indicadores operacionais, e relation managers são úteis para relacionamentos como pedido/itens ou cliente/endereço. Escolha métricas que apoiem uma decisão; não transforme o dashboard em uma coleção de números sem contexto.

## Mais

Documentação: [Filament](https://filamentphp.com/docs/5.x/getting-started) e [configuração de painéis](https://filamentphp.com/docs/5.x/panel-configuration).
