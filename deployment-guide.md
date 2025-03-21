# Peeper App - VPS Deployment Guide

This guide will help you deploy the Peeper app on your VPS using Docker and set up CI/CD with GitHub Actions.

## 1. Initial VPS Setup

SSH into your VPS and run the following commands to install Docker:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker
```

## 2. Directory Setup

Create a directory for the application:

```bash
sudo mkdir -p /var/www/peeper-app
sudo chown -R $USER:$USER /var/www/peeper-app
```

## 3. GitHub Repository Setup

1. Push your code to GitHub if you haven't already
2. Add the following secrets to your GitHub repository:
   - `VPS_HOST`: Your VPS IP address
   - `VPS_USER`: Your SSH username
   - `SSH_PRIVATE_KEY`: Your private SSH key

To generate an SSH key pair (if needed):
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Add the public key to your VPS:
```bash
cat ~/.ssh/id_rsa.pub | ssh user@your-vps-ip "cat >> ~/.ssh/authorized_keys"
```

## 4. Manual First Deployment (Optional)

If you prefer to do the first deployment manually:

```bash
git clone https://github.com/yourusername/peeper-app.git /var/www/peeper-app
cd /var/www/peeper-app
docker build -t peeper-app .
docker run -d -p 3000:3000 --name peeper-app peeper-app
```

## 5. NGINX Setup (Optional)

If you want to use a domain name with NGINX:

```bash
sudo apt install -y nginx
sudo cp /var/www/peeper-app/nginx-config /etc/nginx/sites-available/peeper
```

Edit the NGINX config file to use your domain:
```bash
sudo nano /etc/nginx/sites-available/peeper
```

Enable the site and restart NGINX:
```bash
sudo ln -s /etc/nginx/sites-available/peeper /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 6. SSL with Certbot (Optional)

If you want HTTPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 7. Subsequent Deployments

After the initial setup, all subsequent deployments will happen automatically through GitHub Actions when you push to the main branch. 