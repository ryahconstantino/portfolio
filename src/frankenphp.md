# Como usar o FrankenPHP

FrankenPHP é um servidor PHP moderno baseado em Caddy, que substitui o PHP-FPM e Nginx.

## Instalação

```bash
# Linux/macOS
curl -fsSL https://frankenphp.dev/install.sh | bash

# Ou baixe o binário em github.com/frankenphp/frankenphp/releases
```

## Iniciar servidor

```bash
# Servir diretório atual na porta 80
frankenphp php-server

# Porta personalizada
frankenphp php-server -p 8080
```

## PHP com worker (mais rápido)

```bash
frankenphp run --worker public/index.php
```

## Configurar com Caddyfile

Crie um `Caddyfile`:

```caddy
localhost {
    frankenphp
    root * public
    php_server
}
```

Execute:

```bash
frankenphp run
```

## Suporte a Laravel

```caddy
seudominio.com {
    frankenphp
    root * public
    php_server {
        trusted_proxies private_ranges
    }
}
```

## Mais

Documentação: [frankenphp.dev/docs](https://frankenphp.dev/docs)
