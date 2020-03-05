const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    test: resolve(__dirname, './index.tsx'),
  },

  mode: 'production',

  devServer: {
    host: '0.0.0.0',
    port: 8181,
    hot: true
  },

  module: {
    rules: [
      {
        test: /.ts|tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../examples/public/index.html')
    })
  ]
}
