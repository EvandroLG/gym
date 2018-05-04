const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
};
