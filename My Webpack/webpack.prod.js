const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./package.common");

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
});