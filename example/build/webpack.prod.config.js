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

  output: {
    path: resolve(__dirname, '../dist'),
    filename: './static/js/[name].[contenthash].js',
    chunkFilename: './static/js/[name].[contenthash].chunk.js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 6,
      maxInitialRequests: 6,
      minChunks: 2,
      minSize: 30000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-chunk',
          chunks: 'all',
          priority: 30
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors-chunk',
          chunks: 'all',
          priority: 20
        },
        common: {
          test: path.resolve(__dirname, './../src'),
          name: 'common-chunk',
          chunks: 'all',
          priority: 10
        }
      }
    },
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
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, './../dist/index.html'),
      template: resolve(__dirname, './../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/[contenthash].css'
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256'
    }),
    new BundleAnalyzerPlugin()
  ]
})
