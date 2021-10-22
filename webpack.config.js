const path = require('path')
const HTMLPlugin= require ('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

    },
    optimization: {
        minimizer: [new TerserJSPlugin({}),new CssMinimizerWebpackPlugin({})],
      },
    plugins: [new HTMLPlugin({
    filename : 'index.html',
    template : './src/index.html'},
    ),
    new MiniCssExtractPlugin({
        filename:'style.css',
    }),
],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
      devServer:{
          contentBase: path.resolve(__dirname,'dist'),
          port:'4200'
      }
}