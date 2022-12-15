FROM nginx:latest

WORKDIR /var/www/my-website

COPY . .

RUN cp nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"
