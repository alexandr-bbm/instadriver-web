const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ConfigWebpackPlugin = require("config-webpack");
const path = require('path');

const config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    client: './index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
  },

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.svg/,
        use: 'raw-loader',
      },
      {
        test: /\.woff/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      metadata: {
        baseUrl: '/spa-examples/poll-app',
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new ConfigWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: {
      index: 'index.html'
    }
  },
  node: {
    fs: 'empty'
  }
};

module.exports = config;