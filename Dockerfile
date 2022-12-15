FROM nginx:latest

WORKDIR /var/www/my-website

COPY . .

COPY /etc/letsencrypt/live/motizuki.me/fullchain.pem .
COPY /etc/letsencrypt/live/motizuki.me/privkey.pem .

RUN cp nginx.conf /etc/nginx/conf.d/default.conf && \
    mkdir /etc/letsencrypt/live/motizuki.me &&  cp fullchain.pem /etc/letsencrypt/live/motizuki.me/fullchain.pem && cp privkey.pem /etc/letsencrypt/live/motizuki.me/privkey.pem

EXPOSE 80

CMD nginx -g "daemon off;"
