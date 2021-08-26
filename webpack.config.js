const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].[contenthash].bundle.js',
    },
    mode: 'development',
    module: { 
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
    ],
};