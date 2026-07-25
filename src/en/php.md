# How to install PHP

PHP is a popular open-source scripting language used for web development. Here's how to install it on different systems.

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

Download the installer from [windows.php.net](https://windows.php.net/download/) or use Laragon/XAMPP.

## macOS

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.4)"
```

## Verify installation

```bash
php -v
```

## More

Official docs at [php.net](https://www.php.net/manual/en/install.php)
