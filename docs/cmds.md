# Nginx

## Config (/etc/nginx/sites-available/pottr.org)

```
sudo vi sites-available/pottr.org

server {
    listen 80;
    listen [::]:80;

    # root /var/www/pottr.org/html;
    root /home/ubuntu/project/csc648-react-frontend/build; <- # EDIT THIS PATH
    index index.html index.htm index.nginx-debian.html;

    server_name pottr.org www.pottr.org;

    location / {
            try_files $uri $uri/ =404;
    }
}

sudo nginx -t
sudo systemctl restart nginx
```

# Nginx set up for pottr.org (missing some stuff)

sudo mkdir -p /var/www/pottr.org/html

sudo chown -R $USER:$USER /var/www/pottr.org/html

sudo chmod -R 755 /var/www/pottr.org

nano /var/www/pottr.org/html/index.html

sudo vi /etc/nginx/sites-available/pottr.org

server {
listen 80;
listen [::]:80;

    root /var/www/pottr.org/html;
    index index.html index.htm index.nginx-debian.html;

    server_name pottr.org www.pottr.org;

    location / {
            try_files $uri $uri/ =404;
    }

}

sudo ln -s /etc/nginx/sites-available/pottr.org /etc/nginx/sites-enabled/

# How to SSH into the EC2 instance

## Ubuntu 20.04 LTS

```
### set private key for ssh to ec2
cp credentials/north-cali.pem ~/.ssh/
### check private key is there
ls ~/.ssh/
### change permissions for the key
chmod 600 ~/.ssh/north-cali.pem
### ssh into the instance
ssh -i "~/.ssh/north-cali.pem" ubuntu@ec2-54-219-95-93.us-west-1.compute.amazonaws.com
```

# How to build website

```
# In root folder
# check which branch you're in (writing this we use origin/kelvin_frontend for production)
git status

# fetch changes from remote repo
sudo git fetch origin

# merge changes with your local repo
sudo git merge origin/kelvin_frontend

# build the app, created in build/
sudo yarn build

# You can check /etc/nginx/sites-available/pottr.org to confirm the root directive is properly set
```

# Back up videos

```
cp -r build/ ~/project/pottr-backup/<new-folder>
sudo rm -rd build/ & sudo npm run build
sudo cp ~/project/pottr-backup/refactor-backup/build/*.mp4 build/
sudo cp ~/project/pottr-backup/refactor-backup/build/*.MOV build/
```
