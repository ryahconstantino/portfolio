# Как установить Nginx

Nginx — бесплатный, лёгкий и быстрый веб-сервер. Его можно использовать как обратный прокси, балансировщик нагрузки и кеш. Nginx рассчитан на стабильность и высокую производительность.

## Установка Nginx

Для установки Nginx на сервер Linux выполните команды ниже.

**CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux**

````bash
# Выполните в терминале
sudo yum install epel-release

sudo yum update

sudo yum install nginx

sudo nginx -v
````

**Debian/Ubuntu/ZorinOS/PopOS**

````bash
# Выполните в терминале
sudo apt update

sudo apt install nginx

sudo nginx -v
````

Готово! Установка Nginx завершена.

## Использование обратного прокси

Обратный прокси Nginx связывает домен с приложением на локальном сервере: запросы посетителей передаются приложению, работающему на localhost, благодаря чему оно становится доступным по веб-адресу.

Например, если приложение работает на localhost:8000, после настройки обратного прокси его можно открыть через домен `website.com` в интернете.

1. Создайте файл конфигурации `website.com.conf`:

````bash
sudo vim /etc/nginx/sites-available/website.com.conf
````

2. Добавьте в файл следующее содержимое:

````bash
server {
    listen 80;
    server_name website.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
````

3. Включите конфигурацию, создав символическую ссылку:

````bash
sudo ln -s /etc/nginx/sites-available/website.com.conf /etc/nginx/sites-enabled/
````

4. Проверьте конфигурацию Nginx на ошибки:

````bash
sudo nginx -t
````

5. Перезапустите Nginx для применения изменений:

````bash
sudo systemctl restart nginx
````

:::tip DNS
Не забудьте направить домен на сервер, где выполнена эта настройка.
:::

## Дополнительные материалы

[Официальная документация по установке Nginx](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/).
