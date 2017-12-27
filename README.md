
Sources and credits for this example project are:
http://timrijkse.nl/compiling-sass-with-webpack/ 
https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/
https://stackoverflow.com/questions/31945763/how-to-tell-webpack-dev-server-to-serve-index-html-for-any-route 

1. First install webpack and the webpack dev-server globally to make its commands available at the command line (I used Git bash as command line tool because in Windows it's easy to open git bash in a project directory)
npm install webpack -g
npm install webpack-dev-server -g

2. Then go to the project directory and install all required npm modules in the project directory based on the package.json file:
nmp install

3. Run webpack and the webpack development server based on the configs in webpack.config.js
webpack

4. Open the project directory in your editor and change the 'entry' scss and js files indicated in webpack.config.js.
After saving a file, webpack updates the relevant 'output' files in the /dist directory accordingly.
