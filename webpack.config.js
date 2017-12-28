const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./node_modules/jquery/dist/jquery.slim.min.js', './app.js', './scss/main.scss', './css/plain_css.css'],
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
      your other rules for JavaScript transpiling go in here
      */
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    // Indicating the right environment to ensure development and test artefacts are not packed as part of the bundle
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
