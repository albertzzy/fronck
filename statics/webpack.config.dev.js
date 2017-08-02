const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLESS = new ExtractTextPlugin({
    filename:'dev/style/[name].css',
    allChunks:true
});

//https://webpack.js.org/configuration/resolve/#resolve-extensions
//https://webpack.js.org/guides/lazy-loading/#example
// https://webpack.js.org/plugins/extract-text-webpack-plugin/

const config = {
    entry: {
        index:[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/js/index.js'
        ],
        vendor:['mobx','react','mobx-react']
    },
    output:{
        path:path.resolve(__dirname,'dev/js/'),
        filename:'[name].js' 
    },
    devServer:{
        host:process.env.HOST,
        contentBase:__dirname,
        compress:true,
        port:8080,
        hot:true,
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:'babel-loader'
            },

            {
                test:/\.less$/,
                use:extractLESS.extract({
                    use:['style-loader','css-loader','less-loader'],
                    fallback:'style-loader'
                })


            }

        ]
    },
    resolve:{
        extensions:['.js','.json']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dev']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'

        })
    ]
}













module.exports = config;