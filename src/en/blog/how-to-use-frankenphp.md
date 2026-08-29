# How to use FrankenPHP

FrankenPHP is a modern PHP server built on top of Caddy, replacing PHP-FPM and Nginx.

## Installation

```bash
# Linux/macOS
curl -fsSL https://frankenphp.dev/install.sh | bash

# Or download the binary from github.com/frankenphp/frankenphp/releases
```

## Start server

```bash
# Serve current directory on port 80
frankenphp php-server

# Custom port
frankenphp php-server -p 8080
```

## PHP with worker (faster)

```bash
frankenphp run --worker public/index.php
```

## Configure with Caddyfile

Create a `Caddyfile`:

```caddy
localhost {
    frankenphp
    root * public
    php_server
}
```

Run:

```bash
frankenphp run
```

## Laravel support

```caddy
yourdomain.com {
    frankenphp
    root * public
    php_server {
        trusted_proxies private_ranges
    }
}
```

## More

Documentation: [frankenphp.dev/docs](https://frankenphp.dev/docs)
