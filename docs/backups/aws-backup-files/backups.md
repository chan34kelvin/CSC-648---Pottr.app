/etc/nginx/sites-available/pottr.app

```
server {
#    listen 443;
#    listen [::]:443;

#    root /var/www/pottr.app/html;
#     root /home/ubuntu/project/csc648-react-frontend/build;
     index index.html index.htm index.nginx-debian.html;
     root /home/ubuntu/project/csc648-fa21-04-team01/application/frontend/build;

     server_name pottr.app www.pottr.app;

     location / {
#               index index.html;
            try_files $uri $uri/ =404;
     }
#    listen [::]:443 ssl ipv6only=off; # managed by Certbot
     listen 443 ssl; # managed by Certbot
     ssl_certificate /etc/letsencrypt/live/pottr.app/fullchain.pem; # managed by Certbot
     ssl_certificate_key /etc/letsencrypt/live/pottr.app/privkey.pem; # managed by Certbot
     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
#/*
#server {
   # if ($host = pottr.app) {
 #       return 301 https://$host$request_uri;
  #  } # managed by Certbot

    #if($scheme != "https") {
```

pottr.org

```
server {
    listen 80;
    listen [::]:80;

    # root /var/www/pottr.org/html;
    root /home/ubuntu/project/csc648-react-frontend/build;
    index index.html index.htm index.nginx-debian.html;

    server_name pottr.org www.pottr.org;

    location / {
            try_files $uri $uri/ =404;
    }
}
```
