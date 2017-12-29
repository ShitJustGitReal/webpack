const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: ['./app.js', './scss/main.scss', './css/plain_css.css'],
  output: {
    filename: 'dist/bundle.js'
  },
  // Automatically compile when files change.
  watch: true,
  // Automatically reload the page when compilation is done.
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    },
    inline: true
  },
  // opt for the most optimised form of source maps for production
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      /*
      other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'sass-loader'
          }],
        })
      }
    ]
  },
  plugins: [
    // declare jquery as a plugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // Indicate the production environment to ensure development and test artefacts are not packed as part of the bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // more extensive progress reports in console terminal
    new webpack.ProgressPlugin(),
    // minify JavaScript files
    new UglifyJsPlugin(),
    // minify files to gzip
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    new ExtractTextPlugin({ // define where to save the CSS output file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};