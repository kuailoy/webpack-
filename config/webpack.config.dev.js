const config = require('./config');
const webpackBase = require('./webpack.config.base');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const { SRC_PATH, VENDORS_PATH } = config;

const webpackDev = {
  mode: 'development',
  output: {
    filename: '[name].[hash:8].js',
  },
  devtool: 'eval-cheap-module-source-map', // 开发环境设置sourceMap，生产环境不使用
  devServer: {
    contentBase: './dist/',
    overlay: true, // 错误信息直接显示在浏览器窗口中
    inline: true, // 实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
    hot: true, // 配合webpack.NamedModulesPlugin、webpack.HotModuleReplacementPlugin完成MHR
    host: '0.0.0.0', // 设置为0.0.0.0并配合useLocalIp可以局域网访问
    useLocalIp: true, // 使用本机IP打开devServer，而不是localhost
    proxy: {
      //可以通过proxy代理其他服务器的api
      '/api': {
        target: 'https://v1.alapi.cn',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: [SRC_PATH],
        exclude: [VENDORS_PATH],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        include: [SRC_PATH],
        exclude: [VENDORS_PATH],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 开发环境用于标识模块id
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
  ],
};

module.exports = webpackMerge(webpackBase, webpackDev);
