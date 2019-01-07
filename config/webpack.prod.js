const webpack = require('webpack');
const paths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.js');

config.mode = 'production'

config.module.rules.push({
  test: /\.s?css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../../',
        fallback: 'style-loader'
      }
    },
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
  exclude: /node_modules/
});

config.plugins.push(
  new CleanWebpackPlugin(['build'], {
    verbose: true,
    root: paths.appROOT
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
  new webpack.LoaderOptionsPlugin({minimize: true}),
  new MiniCssExtractPlugin({
    filename: 'static/css/[name]-[hash].css',
    chunkFilename: 'static/css/[name]-[hash].css',
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appIndexHTML
  })
);

module.exports = config;
