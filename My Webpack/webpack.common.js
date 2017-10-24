const path = require("path");
const glob = require("glob");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*设置路径*/
const srcPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");
const imagesPath = path.join(srcPath, "images");
const newImagePath = path.join(distPath, "images");

//遍历所有的html文件
const htmlPages = Object.keys(getEntry("./src/**/*.html", "./dist"));

const config = {
    entry: {
        index: "./src/js/index.js",
        about: "./src/js/about.js"
    },
    output: {
        // publicPath: "",
        path: distPath,
        filename: "js/[name].[hash].bundle.js",
        chunkFilename: "js/[id].chunk.js"
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
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: [
                    path.join(__dirname, "node_modules")
                ],
                loader: "file-loader",
                options: {
                    outputPath: imagesPath
                }
            }
        ]
    },
    plugins: [
        // /*构建index页*/
        // new HtmlWebpackPlugin({
        //     title: "My HTML Template",
        //     inject: true,
        //     // favicon: path.join(__dirname, "src/slimlogo.png"),
        //     template: "src/index.html",
        //     cache: true,
        //     filename: path.join(__dirname, "dist/index.html"),
        //     // minify: {                                               //压缩HTML文件
        //     //     removeComments: true,                               //移除HTML中的注释
        //     //     collapseWhitespace: true                            //删除空白符与换行符
        //     // },
        //     chunks: ["index"]
        // }),
        // /*构建其他子页*/
        // new HtmlWebpackPlugin({
        //     title: "My About Page",
        //     inject: "head",
        //     favicon: "src/images/slimlogo.png",
        //     filename: path.join(__dirname , "./dist/cn/about.html")
        // }),
        new CopyWebpackPlugin([
            {
                from: imagesPath,
                to: newImagePath
            }
        ])
    ]
}

module.exports = config;

//生成页面的title
const confTitle = [
    {
        name: "index",
        dir: "",
        title: "这个是首页"
    },
    {
        name: "about",
        dir: "./cn/",
        title: "这个是关于页"
    }
];

//生成的html存放路径
htmlPages.forEach(pathname => {

    //将路径进行分割,使得生成的路径在dist根目录下, 必须使用\\, 防止生成的路径出错
    const resolvePath = pathname.split("src\\");

    let conf = {
        // title: "My Webpack Demo",
        filename: resolvePath[1] + ".html",
        template: pathname + ".html",
        favicon: "./src/images/slimlogo.png",
        inject: true
    }

    for(var i in confTitle) {
        // if (confTitle[i].name === resolvePath[1]) {
        //     conf.title = confTitle[i].title;
        // }
        if (confTitle[i].name === resolvePath[1]) {
            conf.title = confTitle[i].title;
        }
    }

    //设置头部
    config.plugins.push(new HtmlWebpackPlugin(conf));
});

/*按文件名来获取入口文件(即需要生成的模板文件数量)*/
function getEntry(globPath, dirPath) {
    let files = glob.sync(globPath),
        entries = {},
        entry, dirname, basename, pathname, extname;

    for(let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.normalize(path.join(dirname, basename));
        dirPath = path.normalize(dirPath);

        if(pathname.startsWith(dirPath)) {
            pathname = pathname.substring(dirPath);
        }
        entries[pathname] = ["./" + entry];
    }

    return entries;
}