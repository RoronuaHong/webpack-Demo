const path = require("path");

//提取CSS文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//生成HTML模板
const HtmlWebpackPlugin = require("html-webpack-plugin");

//清空文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Output Management"
        }),
        new HtmlWebpackPlugin({
            filename: "otherpage.html",
            title: "Other Page"
        })
    ]
}