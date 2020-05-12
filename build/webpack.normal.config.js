const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.base.config')

module.exports = merge(WebpackBaseConfig, {
  mode: 'development',

  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'ui-components-library-template',
    libraryTarget: 'umd',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: `[file].map`
    })
  ]
})
