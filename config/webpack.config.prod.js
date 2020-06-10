const webpack = require('webpack');
const config = require('./config');

const webpackBase = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { SRC_PATH, VENDORS_PATH } = config;

const webpackProd = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js', // 生产环境用chunkhash
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
        include: [SRC_PATH],
        exclude: [VENDORS_PATH],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        include: [SRC_PATH],
        exclude: [VENDORS_PATH],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    }),
    new webpack.HashedModuleIdsPlugin(), // 生产环境用于标识模块id
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true, // Boolean/String,字符串即是缓存文件存放的路径
        parallel: true, // 启用多线程并行运行提高编译速度
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};

module.exports = webpackMerge(webpackBase, webpackProd);
