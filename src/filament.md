# Como usar o Filament

Filament é um framework de painéis administrativos para Laravel, rápido e bonito.

## Instalação

```bash
composer require filament/filament:"^3.2" -W

# Publicar assets
php artisan filament:install --panels

# Criar usuário admin
php artisan make:filament-user
```

## Criar um Resource

```bash
php artisan make:filament-resource Product
```

Isso cria um CRUD completo para o model Product.

## Personalizar formulários

```php
public static function form(Form $form): Form
{
    return $form
        ->schema([
            TextInput::make('name')->required(),
            Textarea::make('description'),
            Select::make('status')
                ->options([
                    'active' => 'Ativo',
                    'inactive' => 'Inativo',
                ]),
        ]);
}
```

## Widgets no dashboard

```bash
php artisan make:filament-widget StatsOverview
```

## Tabelas com filtros

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

## Mais

Documentação: [filamentphp.com/docs](https://filamentphp.com/docs)
