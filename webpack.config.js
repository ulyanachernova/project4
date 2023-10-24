const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    devServer: {
        static: './',
        hot: true,
        port: 3001
        },
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new TerserWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
    },
    module: {
       rules: [
           {
               test: /\.css$/,
               use: [ {
                   loader: MiniCssExtractPlugin.loader,
                   options: {
                       esModule: true,
                   }
               }, 'css-loader']
           },
           {
               test: /\.pug$/,
               loader: 'pug-loader',
               options: {
                   pretty: true,
               }
           },
       ]
    },
    devtool: 'inline-source-map'
};