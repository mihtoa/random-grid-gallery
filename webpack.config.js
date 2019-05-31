const devMode = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  optimization: {
    minimizer: [
      new MinifyPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader', // creates style nodes from JS strings
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}
