const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BaseConfig = require('./webpack.base.config')

module.exports = merge(BaseConfig, {
  mode: 'production',

  devtool: 'false',

  optimization: {
    minimizer: [
    ],
    splitChunks: [
    ],
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedChunksPlugin(),
    new BundleAnalyzerPlugin()
  ]
})
