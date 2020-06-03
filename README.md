# Webpack + art-template 多页面项目

## 需求说明

- 支持 ES6 开发环境
- 支持 sass/less 语法
- 支持多页面打包，并构建成多路径
- 不使用 Vue、React 等框架，需要用模板引擎渲染页面

## 开发

开发阶段要考虑的事情

- 技术选型
- 本地服务器
- mock 数据
- 开发环境：source-map, 热更新
- 打包效率：happyPack
- 代码规范

## 技术说明

本项目使用的相关技术如下：

- Jquery
- art-template
- Webpack
- Postcss
- axios

### 模板选择：art-template

- 语法简洁，渲染性能出色
- 与 Webpack 良好结合，编译时解析
- 轻量化

### Webpack 配置

配置的重点在于支持多入口和模板编译

#### 支持 `art-template` 编译

```javascript
{
   test: /\.art$/,
   use: [
       {
         loader: 'art-template-loader'
       }
   ]
}
```

通过配置，可以对后缀名为 `.art` 的文件按照 `art-template` 的语法进行解析，类似 `.vue` 的用法

#### entry 配置

目的：自动化获取多入口目录

#### HtmlWebpackPlugin

## 路由

## 生产环境

初步考虑实现下列内容，以优化打包后代码的大小和性能

- code splitting
- tree shaking
- 按需加载
- 清除缓存
