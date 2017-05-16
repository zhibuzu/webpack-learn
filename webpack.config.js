
 /*----------------------------------------------------  
    Description:
    Version: 
    Copyright (c) 2017 Jesse Hu
    
    05 12, 2017
------------------------------------------------------*/
 var path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
 const webpack = require('webpack'); //to access built-in plugins
 const webpackMerge = require('webpack-merge');

var baseConfig = {
    // devtool	build	rebuild	production	quality
    // eval	+++	+++	no	generated code
    // cheap-eval-source-map	+	++	no	transformed code (lines only)
    //  cheap-source-map	+	o	yes	transformed code (lines only)
    //  cheap-module-eval-source-map	o	++	no	original source (lines only)
    //  cheap-module-source-map	o	-	yes	original source (lines only)
    //  eval-source-map	--	+	no	original source
    //  source-map	--	--	yes	original source
    //  nosources-source-map	--	--	yes	without source content
    devtool: "cheap-source-map", // fast, suit to used on devlopment
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
     module: {
         rules: [
             {test: /.(js|jsx)$/, use: 'babel-loader'}
         ]
     },
     plugins: [
        //  new webpack.optimize.UglifyJsPlugin(),
         new HtmlWebpackPlugin({template: './app/index.html'})
     ],
     // devServer config
     devServer: {
         lazy: true,
         filename: "bundle.js", // https://webpack.bootcss.com/configuration/dev-server/#devserver-filename-
         contentBase: '/', // https://webpack.bootcss.com/configuration/dev-server/#devserver-contentbase
         compress: true, // https://webpack.bootcss.com/configuration/dev-server/#devserver-compress
         port: 8080,
         clientLogLevel: 'error', // https://webpack.bootcss.com/configuration/dev-server/#devserver-clientloglevel
     }
 };

// all the targets: ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main']
let targets = ['web'].map((target) => {
  let base = webpackMerge(baseConfig, {
    target: target,
    output: {
      path: path.resolve(__dirname, './dist/' + target),
      filename: 'bundle.' + target + '.js'
    }
  });
  return base;
});

 module.exports = targets;
