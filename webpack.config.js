const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].[contenthash].bundle.js',
    },
    mode: process.env.NODE_ENV || "development",
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
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]",
                            }
                        }
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],

            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', ".ts", ".tsx"],
    }
};


// ,
// "plugins": [
//     [
//         "@dr.pogodin/babel-plugin-react-css-modules",
//         {
//             "filetypes": {
//                 ".scss": {
//                     "syntax": "postcss-scss"
//                 }
//             },
//             "generateScopedName": "[local]--[hash:base64:5]"
//         }
//     ],
//     "@babel/plugin-proposal-class-properties"
// ]