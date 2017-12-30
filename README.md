
Sources and credits for this example project are:
https://docs.npmjs.com/cli/install
https://webpack.academy/p/the-core-concepts
https://webpack.js.org/plugins/provide-plugin/
http://timrijkse.nl/compiling-sass-with-webpack/ 
https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/
https://stackoverflow.com/questions/31945763/how-to-tell-webpack-dev-server-to-serve-index-html-for-any-route
https://hackernoon.com/optimising-your-application-bundle-size-with-webpack-e85b00bab579 
https://github.com/webpack-contrib/uglifyjs-webpack-plugin
https://survivejs.com/webpack/loading/images/
https://medium.com/a-beginners-guide-for-webpack-2/copy-all-images-files-to-a-folder-using-copy-webpack-plugin-7c8cf2de7676

1. First install webpack and the webpack dev-server globally to make its commands available at the command line
(in Visual Studio code there's a terminal window available on the bottom-right, automatically starting in the project folder's root):
npm install webpack -g
npm install webpack-dev-server -g

2. Then go to the project directory and install all required npm modules in the project directory based on the package.json file:
nmp install

3. Run webpack and the webpack development server based on the configs in webpack.config.js:
webpack-dev-server

4. Open the project directory in your editor and change the 'entry' scss and js files indicated in webpack.config.js.
After saving a file, webpack updates the relevant 'output' files in the /dist directory accordingly.

5. After assuring it's working fine with the files in the cache of the dev server, build the output files (without running this command, the files will not show up in the dist folder):
webpack
