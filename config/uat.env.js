'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // API_BASE: 'http://xyproject.uat.admin.prd.jingcaiwang.cn/web',
    API_BASE: 'http://xyproject.uat.admin.bdaxinyuan.com/web',
    DEBUG_MODE: true
});
