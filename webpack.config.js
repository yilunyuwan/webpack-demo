const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

};