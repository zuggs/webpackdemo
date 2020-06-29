const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const devConfig = {
  mode:'development',
  output: {
    filename: '[name].js',
  },
  devServer: {
    // contentBase: './dist',
    // stats: true,
    port: 3001,
    open:true,
    hot: true,
  },
}

module.exports = merge(baseConfig, devConfig)