'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://192.168.0.113:3030"',  //不能去掉里面的""
  contractAddress:'"0xC45D4b5eF0BaC22dA252977EEa53Cf724AF065b4"',
  ethNetPrefix:'"ropsten."'
})