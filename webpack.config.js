const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath:'assets/images',
          publicPath: '../images'
        },
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'theHotel',
      filename: 'theHotel.html',
      template: './src/theHotel.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'theRooms',
      filename: 'theRooms.html',
      template: './src/theRooms.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'contacts',
      filename: 'contacts.html',
      template: './src/contacts.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'restaurant',
      filename: 'restaurant.html',
      template: './src/restaurant.hbs'
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/style/app.css',
    }),
  ]
};