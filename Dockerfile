FROM nginx:latest

WORKDIR /var/www/my-website

COPY . .

RUN cp nginx.conf /etc/nginx/conf.d/default.conf && \
    mkdir -p /etc/letsencrypt/live/motizuki.me/

EXPOSE 80 443

CMD nginx -g "daemon off;"
