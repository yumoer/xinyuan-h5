'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_BASE: 'http://xyproject.test.admin.prd.jingcaiwang.cn/web',
    DEBUG_MODE: true // this overrides the DEBUG_MODE value of prod.env
});
