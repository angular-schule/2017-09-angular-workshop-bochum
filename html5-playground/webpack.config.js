// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['./js/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // creates style nodes from JS strings
          { loader: "style-loader" },
          // translates CSS into CommonJS
          { loader: "css-loader", options: { sourceMap: true } },
          // compiles Sass to CSS
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader']
      }]
  },
  resolve: {
    modules: ['node_modules']
  }
};
