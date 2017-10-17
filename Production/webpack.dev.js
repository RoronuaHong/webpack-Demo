const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.export = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    }
});