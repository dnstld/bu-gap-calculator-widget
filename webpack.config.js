const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const bundleOutputDir = './dist';

let copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isProd = env && env.prod;

  return [{
    mode: `${isProd ? 'production' : 'development'}`,
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
    plugins: [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin({ patterns: [{ from: 'demo/'}] })],
    module: {
      rules: [
        {
          test: /\.html$/i, use: 'html-loader'
        },
        {
          test: /\.css$/i, use: ['style-loader', 'css-loader' + isProd ? '?minimize' : '']
        },
        {
          test: /\.js$/i, exclude: /node_modules/, use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                'targets': {
                  'browsers': ['ie 6', 'safari 7']
                }
              }]]
            }
          }
        }
      ]
    }
  }]
}