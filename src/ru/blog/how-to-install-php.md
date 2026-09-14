# Как установить PHP

PHP — популярный скриптовый язык с открытым исходным кодом для веб-разработки. Ниже показана его установка в разных системах.

## Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install php php-cli php-common php-mbstring php-xml php-curl
php -v
```

## Linux (CentOS/RHEL)

```bash
sudo yum install epel-release
sudo yum install php php-cli php-mbstring php-xml php-curl
php -v
```

## Windows

Скачайте установщик с [сайта PHP для Windows](https://windows.php.net/download/) или используйте Laragon/XAMPP.

## macOS

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
```

## Проверка установки

```bash
php -v
```

## Дополнительные материалы

[Официальная документация PHP](https://www.php.net/manual/ru/install.php).
