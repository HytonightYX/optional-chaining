const path = require('path')
const { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common')

module.exports = smart(webpackCommonConf, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin()
  ]
})