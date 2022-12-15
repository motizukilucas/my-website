FROM nginx:latest

WORKDIR /var/www/my-website

COPY . .

RUN cp nginx.conf /etc/nginx/conf.d/default.conf && \
    mkdir /var/www/certbot && mkdir /etc/nginx/ssl

EXPOSE 80 443

CMD nginx -g "daemon off;"
