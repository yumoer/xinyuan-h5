'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_BASE: 'http://192.168.101.43/web',
    DEBUG_MODE: true // this overrides the DEBUG_MODE value of prod.env
})
