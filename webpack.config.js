const path = require('path');
const webpack = require('webpack');
let copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './dist';

module.exports = (env) => {
  return [{
    entry: './src/main.js',
    output: {
      filename: 'widget.js',
      path: path.resolve(bundleOutputDir)
    },
    devServer: {
      static: bundleOutputDir
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin(),
      new copyWebpackPlugin({
        patterns: [{ from: 'demo/'}]
      })
    ]
  }]
}