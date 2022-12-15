FROM nginx:latest

WORKDIR /var/www/my-website

COPY . .

RUN cp nginx.conf /etc/nginx/conf.d/default.conf && \
    mkdir /etc/letsencrypt/live/motizuki.me/

EXPOSE 80

CMD nginx -g "daemon off;"
