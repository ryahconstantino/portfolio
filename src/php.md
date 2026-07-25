# Como instalar o PHP

O PHP é uma linguagem de script open source muito utilizada no desenvolvimento web. Veja como instalar em diferentes sistemas.

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

Baixe o instalador em [windows.php.net](https://windows.php.net/download/) ou use o Laragon/XAMPP.

## macOS

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
```

## Verificar instalação

```bash
php -v
```

## Mais

Documentação oficial em [php.net](https://www.php.net/manual/pt_BR/install.php)
