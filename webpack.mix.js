// webpack.mix.js

let mix = require('laravel-mix');




mix.react('resources/js/app.jsx', 'public/js/app.js');
mix.babel('public/js/app.js', 'public/js/app.es5.js')
  .sass('resources/assets/sass/app.scss', 'public/css');
// aliases so instead of e.g. '../../components/test' we can import files like '@/components/test'

mix.webpackConfig({

    resolve: {
        alias: {

            "@sass": path.resolve(
                __dirname,
                "resources/assets/sass"
            ),
        }
    }
 });

//mix.sass('resources/js/app.scss', 'public/css');
//mix.sass('resources/js/app.scss', 'resources/js/app.css');
