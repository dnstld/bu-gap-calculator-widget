const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const bundleOutputDir = './dist';

let copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return [{
    mode: `${env && env.prod ? 'production' : 'development'}`,
    entry: './src/main.js',
    output: {
      filename: 'widget.js',
      path: path.resolve(bundleOutputDir)
    },
    devServer: {
      static: bundleOutputDir
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    plugins: [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin({ patterns: [{ from: 'demo/'}] })]
  }]
}