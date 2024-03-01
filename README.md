# My Website
## Commands
Compile SCSS, minify css and js

    sass --watch css/styles.scss css/styles.css
    npx postcss css/styles.css > css/styles.min.css
    uglifyjs js/app.js -b -o js/app.min.js

Certbot challenge

    sudo certbot -d 'lucasmotizuki.com' -d '*.lucasmotizuki.com' --manual --preferred-challenges dns certonly
