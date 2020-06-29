const baseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const path = require('path')
const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  mode:'production',
  output: {
    filename: 'js/[name].[chunkhash:6].js',
    path:path.resolve('./dist')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify:{
        removeRedundantAttributes:true, // 删除多余的属性
        collapseWhitespace:true, // 折叠空白区域
        removeAttributeQuotes: true, // 移除属性的引号
        removeComments: true, // 移除注释
        collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
      },
    }),
  ],
  optimization: {//优化项
    minimizer: [
      new TerserJSPlugin({
        extractComments:false,
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"]
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
})