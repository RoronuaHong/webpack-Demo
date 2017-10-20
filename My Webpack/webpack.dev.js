const merge = require("webpack-merge");
const common = require("./package.common");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 7777
    }
})