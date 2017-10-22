const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./src",
        compress: true,
        port: 7777
    }
})