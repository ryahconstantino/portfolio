# Como instalar o Nginx

O Nginx é um software de servidor web de código aberto, leve e rápido. Ele pode ser usado como proxy reverso,
balanceador de carga e cache. O Nginx é projetado para ser estável e performático.

## Instalar o Nginx

Utilize os comandos abaixo instalar o Nginx no seu servidor Linux

**CentOS/RHEL/Oracle Linux/AlmaLinux/Rocky Linux**

````bash
# Execute no Terminal
sudo yum install epel-release

sudo yum update

sudo yum install nginx

sudo nginx -v
````

**Debian/Ubuntu/ZorinOS/PopOS**

````bash
# Execute no Terminal
sudo apt update

sudo apt install nginx

sudo nginx -v
````

Pronto! Sua instalação do Nginx está finalizada.

## Utilizar Proxy Reverso

Um proxy reverso no Nginx funciona captando as solicitações do servidor local (localhost) e encaminhando-as
para um domínio, permitindo que um site rodando via script no seu computador seja acessado publicamente
através de um endereço web.

Por exemplo, se sua aplicação está rodando em localhost:8000, ao configurar o proxy reverso, você pode
acessá-la através de domínio website.com, tornando-a disponível na internet.

1. Crie um novo arquivo de configuração chamado website.com.conf:

````bash
sudo vim /etc/nginx/sites-available/website.com.conf
````

2. Adicione o seguinte conteúdo ao arquivo:

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

3. Habilitando a Configuração com um atalho

````bash
sudo ln -s /etc/nginx/sites-available/website.com.conf /etc/nginx/sites-enabled/
````

4. Teste a configuração do Nginx para verificar se há erros:

````bash
sudo nginx -t
````

5. Reinicie o Nginx para aplicar as mudanças:

````bash
sudo systemctl restart nginx
````

:::tip DNS
Lembre-se de apontar o domínio para o servidor que realizou esta configuração
:::

## Mais

Encontre a documentação oficial em [Instalação do Nginx](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)
