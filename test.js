const fs = require('fs');
const path = require('path');
const config = require('./config/config');

const getFileNameList = (path) => {
  const fileList = [];
  const dirList = fs.readdirSync(path);
  dirList.forEach((item) => {
    if (item.indexOf('.html') >= 0) {
      fileList.push(item.split('.')[0]);
    }
  });
  return fileList;
};

const list = getFileNameList(path.resolve(__dirname, './src'));
console.log(list);
