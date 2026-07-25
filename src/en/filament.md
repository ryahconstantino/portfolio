# How to use Filament

Filament is a beautiful admin panel framework for Laravel.

## Installation

```bash
composer require filament/filament:"^3.2" -W

# Publish assets
php artisan filament:install --panels

# Create admin user
php artisan make:filament-user
```

## Create a Resource

```bash
php artisan make:filament-resource Product
```

This creates a complete CRUD for the Product model.

## Customize forms

```php
public static function form(Form $form): Form
{
    return $form
        ->schema([
            TextInput::make('name')->required(),
            Textarea::make('description'),
            Select::make('status')
                ->options([
                    'active' => 'Active',
                    'inactive' => 'Inactive',
                ]),
        ]);
}
```

## Dashboard widgets

```bash
php artisan make:filament-widget StatsOverview
```

## Tables with filters

```php
public static function table(Table $table): Table
{
    return $table
        ->columns([
            TextColumn::make('name')->searchable(),
            TextColumn::make('created_at')->dateTime(),
        ])
        ->filters([
            SelectFilter::make('status'),
        ]);
}
```

## More

Documentation: [filamentphp.com/docs](https://filamentphp.com/docs)
