/*eslint no-var: 0*/
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
