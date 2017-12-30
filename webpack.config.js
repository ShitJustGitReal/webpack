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
    // declare jquery as a plugin, else functions that require $ will given an 'undefined' error
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // indicate the production environment to ensure development and test artefacts are not packed as part of the bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // more extensive progress reports in console terminal
    new webpack.ProgressPlugin(),
    // minify JavaScript files but still building a sourcemap file as well for debugging
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    // define where the ExtractTextPlugin saves the CSS output file
    new ExtractTextPlugin({
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
    // build compressed gzip files as well
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
    })
  ],
};