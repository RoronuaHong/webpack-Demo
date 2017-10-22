const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/js/index.js",
        about: "./src/js/about.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].[hash].bundle.js"
    },
    plugins: [
        /*构建index页*/
        new HtmlWebpackPlugin({
            title: "My HTML Template",
            filename: path.resolve(__dirname, "dist/index.html")
        }),
        /*构建其他子页*/
        new HtmlWebpackPlugin({
            title: "My About Page",
            filename: path.resolve(__dirname , "./dist/cn/about.html")
        })
    ]
}