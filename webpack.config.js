const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve('./src/js'),
  entry: [
    "./app",
    "../libs/bootstrap4/js/bootstrap",
    "./parallax",
    "../components/header",
    "../components/count-down",
    "../components/location",
    "../components/wedding-party",
    "../components/our-story",
    "../components/registry",
    "../components/rsvp",
    "../components/gallery",
    "../components/footer"
  ],
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "bundle.js"
  },

  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.ProvidePlugin({
      "React": 'react'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],

  devServer: {
    contentBase: 'public'
  },

  module: {
    //		preLoaders: [
    //			{
    //				test: /\.js$/, // include JS files
    //				exclude: 'node_modules', // exclude any and all files in the node_modules folder
    //				loader: 'jshint-loader'
    //			}
    //		],
    loaders: [
      {
        test: /\.css$/, // include CSS files
        exclude: /node_modules/, // exclude all files in the node_modules folder
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "autoprefixer-loader")
      },
      {
        test: /\.scss$/, // include SCSS files
        exclude: /node_modules/, // exclude all files in the node_modules folder
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
      },
      {
        test: /\.(es6$|jsx)$/, // include .es6 files
        exclude: /node_modules/, // exclude all files in the node_modules folder
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|webp|ttf|eot|woff2|woff|svg)$/, // Include PNG and JPG Images files
        exclude: /node_modules/, // exclude all files in the node_modules folder
        loader: 'url-loader?limit=8'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  },

  watch: true
};