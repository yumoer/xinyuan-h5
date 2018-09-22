'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const prodEnv = require('./prod.env')
const testEnv = require('./test.env')
const devEnv = require('./dev.env')

let api_base;

switch (process.env.env_config) {
    case "prod":
        api_base = prodEnv.API_BASE;
        break;
    case "test":
        api_base = testEnv.API_BASE;
        break;
    case "dev":
        api_base = devEnv.API_BASE;
        break
}

module.exports = {
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),
        prodEnv: require('./prod.env'),
        testEnv: require('./test.env'),
        devEnv: require('./dev.env'),
        uatEnv: require('./uat.env'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        proxyTable: {
            '/web': { // 匹配所有以 '/api'开头的请求路径
                target: api_base, // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
                    '^/web': ''
                }
            }
        },
        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    }
}
