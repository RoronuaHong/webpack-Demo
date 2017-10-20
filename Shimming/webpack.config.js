const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: require.resolve("index.js"),
                use: "imports-loader?this=>window"
            },
            {
                test: require.resolve("globals.js"),
                use: "exports-loader?file,parse=helper.parse"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // lodash: "lodash"
            join: ["lodash", "join"]
        })
    ]
}