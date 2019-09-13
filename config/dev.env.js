'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //baseUrl: '"http://119.3.8.38:8889"',
  // baseUrl: '"http://192.168.1.5:8889"',
  // appId:'"15000850008"',
  // aesKey:'"S9u978Q31NGPGc5H"',
  // ivKey:'"X83yESM9iShLxfwS"',
  // appKey:'"Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi"',

})
