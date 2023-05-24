const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const proConfig  = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, "../src/index"),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index.js",
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default',  // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    },

};

module.exports =  merge(baseConfig, proConfig)