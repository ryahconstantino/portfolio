# How to install Nginx

Nginx is a free, lightweight, and fast web server software. It can be used as a reverse proxy, load balancer, and cache. Nginx is designed to be stable and high-performing.

## Install Nginx

Use the commands below to install Nginx on your Linux server

**CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux**

````bash
# Run in Terminal
sudo yum install epel-release

sudo yum update

sudo yum install nginx

sudo nginx -v
````  

**Debian/Ubuntu/ZorinOS/PopOS**

````bash
# Run in Terminal
sudo apt update

sudo apt install nginx

sudo nginx -v
````  

Done! Your Nginx installation is complete.

## Use Reverse Proxy

A reverse proxy in Nginx works by capturing requests from the local server (localhost) and forwarding them to a domain, allowing a website running via a script on your computer to be publicly accessed via a web address.

For example, if your application is running on localhost:8000, by setting up the reverse proxy, you can access it via the domain `website.com`, making it available on the internet.

1. Create a new configuration file named `website.com.conf`:

````bash
sudo vim /etc/nginx/sites-available/website.com.conf
````  

2. Add the following content to the file:

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

3. Enable the Configuration with a shortcut

````bash
sudo ln -s /etc/nginx/sites-available/website.com.conf /etc/nginx/sites-enabled/
````  

4. Test the Nginx configuration to check for errors:

````bash
sudo nginx -t
````  

5. Restart Nginx to apply the changes:

````bash
sudo systemctl restart nginx
````  

:::tip DNS  
Remember to point the domain to the server where this configuration was made.  
:::

## More

Find the official documentation at [Nginx Installation](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)