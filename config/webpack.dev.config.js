
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js'); // 引用公共配置
const IS_PROD = process.env.NODE_ENV === "production";

const devConfig = {
    mode: process.env.NODE_ENV, // 开发模式
    entry: path.join(__dirname, "../demo/src/app.js"),
    output: {
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'watermark',
            filename: "index.html",
            template: "./index.html",
            inject: true,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, '../demo/src'),
        compress: true,
        port: 3001, // 启动端口为 3001 的服务
        open: true // 自动打开浏览器
    },
}

module.exports = merge(devConfig, baseConfig); // 将baseConfig和devConfig合并为一个配置