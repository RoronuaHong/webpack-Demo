const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*设置路径*/
const distPath = path.join(__dirname, "dist");
const jsPath = path.join(distPath, "js");
const cssPath = path.join(distPath, "css");

module.exports = {
    entry: {
        index: "./src/js/index.js",
        about: "./src/js/about.js"
    },
    output: {
        // PublicPath: "/",
        path: path.join(__dirname, "dist/js"),
        filename: "[name].[hash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     exclude: [
            //         path.resolve(__dirname, "node_modules")
            //     ],
            //     loader: "file-loader",
            //     options: {
            //         outputPath: "images/"
            //     }
            // }
        ]
    },
    plugins: [
        /*构建index页*/
        new HtmlWebpackPlugin({
            title: "My HTML Template",
            inject: true,
            favicon: "src/images/slimlogo.png",
            filename: path.join(__dirname, "dist/index.html")
        }),
        /*构建其他子页*/
        new HtmlWebpackPlugin({
            title: "My About Page",
            inject: "head",
            favicon: "src/images/slimlogo.png",
            filename: path.join(__dirname , "./dist/cn/about.html")
        })
    ]
}