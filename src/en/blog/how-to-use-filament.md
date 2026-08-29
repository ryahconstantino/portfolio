# How to use Filament

Filament is an administrative-panel framework for Laravel. It organizes CRUD interfaces, tables, forms, filters, actions and dashboards without mixing administrative rules into the public website.

## Installation

In a Laravel application already connected to its database, install the panel and create the first administrator:

```bash
composer require filament/filament:"^5.0"
php artisan filament:install --panels
php artisan make:filament-user
```

The installer creates a panel provider, usually at `app/Providers/Filament/AdminPanelProvider.php`, and the default panel is available at `/admin`.

## Create a resource

A resource brings together list, create and edit pages for an Eloquent model. To start a product CRUD:

```bash
php artisan make:filament-resource Product
```

Model fields, tables and filters should reflect domain rules. For a catalog, price, stock, status and publication must be validated by the server, not only displayed in the panel.

## Separate panels and permissions

An application can have an administrator panel at `/admin` and an operator panel at `/app`. Create an additional panel when audiences have different permissions and navigation:

```bash
php artisan make:filament-panel app
```

Use Laravel policies and authorization checks in resources, pages and actions. A user must be denied an operation even if they attempt to access a URL directly.

## More

Documentation: [Filament](https://filamentphp.com/docs/5.x/getting-started) and [panel configuration](https://filamentphp.com/docs/5.x/panel-configuration).
