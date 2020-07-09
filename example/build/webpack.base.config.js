const { resolve } = require('path')

module.exports = {
  target: 'web',

  entry: resolve(__dirname, '../src/index.js'),

  output: {
    path: resolve(__dirname, '../dist'),
    filename: './static/js/[name].[contenthash].js',
    chunkFilename: './static/js/[name].[contenthash].chunk.js',
  },

  resolve: {
    extensions: ['.js'],

    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },

  module: {
    rules: [
      {
        test: /.js|jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: './static/img/[name].[hash:7].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: './static/font/[name].[hash].[ext]',
          },
        }],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './static/media/[name].[hash:7].[ext]',
        },
      },
    ],
  }
}
