const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(BaseConfig, {
  devtool: '#cheap-module-eval-source-map',

  mode: 'development',

  devServer: {
    host: '',
    port: '',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, './../dist/index.html'),
      template: resolve(__dirname, './../public/index.html')
    })
  ]
})
