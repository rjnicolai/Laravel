const mix = require('laravel-mix');

const StyleLintPlugin = require('stylelint-webpack-plugin');
/*
 |--------------------------------------------------------------------------
      | Mix Asset Management
      |--------------------------------------------------------------------------
      |
      | Mix provides a clean, fluent API for defining some Webpack build steps
      | for your Laravel application. By default, we are compiling the Sass
      | file for the application as well as bundling up all the JS files.
      |
      */

// config eslint
mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.(js)?$/,
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      files: 'resources/sass/**/*.scss',
      configFile: './.stylelintrc.json',
    }),
  ],
});

mix
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .browserSync({
    files: [
      './**/*.php',
      './views/**/*.php',
      './layouts/*',
      './partials/*',
      '/public/js/app.js',
      '/public/css/app.css',
    ],
    proxy: 'laravel.test',
    notify: false,
  });
