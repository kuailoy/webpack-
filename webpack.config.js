// 基础配置文件，包含了不同环境通用配置
const path = require('path'); // nodejs路径模块，用于读取路径
const fs = require('fs'); // nodejs文件模块，用于读取文件
// const config = require('./configc/config'); // 获取配置
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 用于生成html

// 获取html文件名，用于生成入口

// const getFileNameList = (path) => {
//   const fileList = [];
//   const dirList = fs.readdirSync(path);
//   dirList.forEach((item) => {
//     if (item.indexOf('.html') >= 0) {
//       fileList.push(item.split('.')[0]);
//     }
//   });
//   return fileList;
// };

// const list = getFileNameList(path.resolve(__dirname, './src'));
// console.log(list);

module.exports = {
  mode: 'development',
  entry: {
    'home/index': './src/pages/home/index',
    'courses/index': './src/pages/courses/index',
    'laboratory/index': './src/pages/home/index',
  },
  output: {
    filename: '[name]@[chunkhash].min.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.jpg|png$/,
        use: [
          {
            loader: 'url-loader?mimetype=image/png',
            options: {
              esModule: false,
            },
          },
        ],
      },

      // {
      //   test: /\.(png|svga?|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 41985,
      //         fallback: 'file-loader',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.art$/,
        loader: 'art-template-loader',
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home/index.html',
      template: './index.html',
      chunks: ['home/index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'laboratory/index.html',
      template: './index.html',
      chunks: ['laboratory/index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'courses/index.html',
      template: './index.html',
      chunks: ['courses/index'],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
