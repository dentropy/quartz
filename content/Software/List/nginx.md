## Example `nginx.conf`

``` conf
server {
    listen       80;
    server_name  localhost;
    root /var/www/html;
    index index.html;
    # serve static files as per the below configuration. The static file will be cached for 5 days
    location / {
        try_files $uri $uri/ =404;
    }
}
```

[apps/static/default.conf · master · Paul Mullins / DentropyCloud-traefik · GitLab](https://gitlab.com/dentropy/dentropycloud-traefik/-/blob/master/apps/static/default.conf)

## Port Forwarding using Nginx with SSL


Check nginx config

`sudo nginx -t`

Restart nginx

`sudo systemctl reload nginx`

## Port Forwarding using Nginx with Self Signed SSL Cert


1.  Setup a ubuntu VM and install nginx
    
        sudo apt update
        sudo apt install -y nginx
        
    
2.  Create some self signed certs
    
        sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
        
    
3.  Create file to manage proxy site at `/etc/nginx/sites-available/{site hostname}}` the following format
    
``` conf
    server {
        listen 80;
        server_name {site hostname}};
        return 302 https://{site hostname}};
    }
    
    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name {site hostname}};
    
        ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
        ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
        ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
    
    
        location / {
            proxy_pass {http or https}}://{proxied hostname or IP address}};
        }
    }
```
        
    
4.  Link site to site-available folder
    
        ln -s /etc/nginx/sites-available/{site hostname}} /etc/nginx/sites-enabled/{site hostname}}
        
    

Port Forwarding using Nginx with Letsencrypt SSL Cert
-----------------------------------------------------

1.  Install Letsencrypt
    
        sudo apt update
        sudo apt install -y letsencrypt
        
    
2.  Run command to generate certs
    
        sudo mkdir -p /var/lib/letsencrypt/
        sudo certbot certonly --email {your@emailaddress}} -d {yourdomain}} --standalone
        
    
3.  Modify as necessary
    
        server {
            listen 80;
            server_name {site hostname}};
            return 302 https://{site hostname}};
        }
        
        server {
            listen 443 ssl http2;
            listen [::]:443 ssl http2;
            server_name {site hostname}};
        
            #ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
            #ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
            ssl_trusted_certificate   /etc/letsencrypt/live/{site hostname}}/chain.pem;
            ssl_certificate           /etc/letsencrypt/live/{site hostname}}/fullchain.pem;
            ssl_certificate_key       /etc/letsencrypt/live/{site hostname}}/privkey.pem;
        
            ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
            location / {
                proxy_pass {http or https}}://{proxied hostname or IP address}};
            }
        }
        
    
4.  Run the following commands
    
        sudo apt install certbot
        sudo mkdir -p /var/lib/letsencrypt/
        sudo certbot certonly --email <your@emailaddress> -d <yourdomain> --standalone
        
    
    **\*** Alternative virtual host setup
    

One can copy just the server section of config code and put it in between the http brackets of /etc/nginx.conf as long as the line container proxy\\~cache~ is removed

Add a HTTP Password
-------------------

[https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-password-authentication-with-nginx-on-ubuntu-14-04)

## Docker compose

``` yaml
version: '3'
services:
    nginx:
        image: nginx:latest
        container_name: production_nginx
        volumes:
            - ./nginx.conf:/etc/nginx/nginx.conf
        ports:
            - 7080:80
            - 7443:443
```  

user www www; ## Default: nobody worker\\~processes~ 5; ## Default: 1 error\\~log~ logs/error.log; pid logs/nginx.pid; worker\\~rlimit~\\~nofile~ 8192;

events { worker\\~connections~ 4096; ## Default: 1024 }

http { include conf/mime.types; include /etc/nginx/proxy.conf; include /etc/nginx/fastcgi.conf; index index.html index.htm index.php;

default\\~type~ application/octet-stream; log\\~format~ main '$remote\\~addr~ - $remote~user~ \[$time\\~local~\] $status ' '"$request" $body~bytessent~ "$http\\~referer~"' '"$http~useragent~" "$http\\~x~\\~forwarded~\\~for~"'; access\\~log~ logs/access.log main; sendfile on; tcp\\~nopush~ on; server\\~names~\\~hash~\\~bucket~\\~size~ 128; # this seems to be required for some vhosts

server { # simple reverse-proxy listen 80; server\\~name~ domain2.com www.domain2.com; access\\~log~ logs/domain2.access.log main;

    # pass requests for dynamic content to rails/turbogears/zope, et al
    location / {
      proxy_pass      https://127.0.0.1:7001;
    }
    

} }

Sources and further reading
---------------------------

[Example of proxypass](https://stackoverflow.com/questions/21064401/route-different-proxy-based-on-subdomain-request-in-nginx) [Simpler nginx config](https://serverfault.com/questions/886582/single-server-nginx-as-a-reverse-proxy-multiple-domains-websites) [Reset default nginx configuration](https://stackoverflow.com/questions/28141667/how-to-reinstall-nginx-if-i-deleted-etc-nginx-folder-ubuntu-14-04)  
[Nginx example config](https://www.nginx.com/resources/wiki/start/topics/examples/full/) [How to enable a site](https://serverfault.com/questions/424452/nginx-enable-site-command)
