const path = require('path'); // nodejs路径模块，用于读取路径
const fs = require('fs'); // nodejs文件模块，用于读取文件
const config = require('./config'); // 获取配置

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 用于生成html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空dist

const { PROJECT_PATH, PAGE_PATH } = config;

// 动态生成入口
const getEntry = () => {
  const entryMap = {};
  fs.readdirSync(PAGE_PATH).forEach((pathName) => {
    // pathName 为读取到的 文件/文件夹名, 拼成全路径
    const fullPathName = path.join(PAGE_PATH, pathName);
    const stat = fs.statSync(fullPathName);
    const fileName = path.join(fullPathName, pathName + '.js');

    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[`${pathName}/${pathName}`] = fileName;
    }
  });
  return entryMap;
};

// 动态生成html
const getHtmlArray = (entryMap) => {
  const htmlArray = [];
  Object.keys(entryMap).forEach((key) => {
    const currentDir = key.split('/')[0];
    const fullPathName = path.join(PAGE_PATH, currentDir);
    const templateSrc = path.join(fullPathName, currentDir + '.html');
    htmlArray.push(
      new HtmlWebpackPlugin({
        filename: currentDir + '/index.html',
        template: templateSrc,
        chunks: [key],
      })
    );
  });
  return htmlArray;
};

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    filename: '[name].[chunkhash:5].js',
    path: path.join(PROJECT_PATH, './dist'),
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
  plugins: [new CleanWebpackPlugin()].concat(htmlArray),
  resolve: {
    extensions: ['.js'],
  },
};
