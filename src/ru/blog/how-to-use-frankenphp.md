# Как использовать FrankenPHP

FrankenPHP — современный сервер PHP на основе Caddy, заменяющий PHP-FPM и Nginx.

## Установка

```bash
# Linux/macOS
curl -fsSL https://frankenphp.dev/install.sh | bash

# Или скачайте исполняемый файл с github.com/frankenphp/frankenphp/releases
```

## Запуск сервера

```bash
# Обслуживать текущий каталог на порту 80
frankenphp php-server

# Другой порт
frankenphp php-server -p 8080
```

## PHP с рабочим процессом для ускорения

```bash
frankenphp run --worker public/index.php
```

## Настройка через Caddyfile

Создайте `Caddyfile`:

```caddy
localhost {
    frankenphp
    root * public
    php_server
}
```

Запустите:

```bash
frankenphp run
```

## Поддержка Laravel

```caddy
yourdomain.com {
    frankenphp
    root * public
    php_server {
        trusted_proxies private_ranges
    }
}
```

## Дополнительные материалы

[Документация FrankenPHP](https://frankenphp.dev/docs).
