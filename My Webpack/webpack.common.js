const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*设置路径*/
const srcPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");
const imagesPath = path.join(srcPath, "images");
const newImagePath = path.join(distPath, "images");

/*遍历获取所有的html文件*/
const htmlPages = Object.keys(getEntry("./src/**/*.html", ""));

/*遍历获取所有的js文件*/
const jsCollection = Object.keys(getEntry("./src/js/*.js", ""));

const config = {
    /*添加js入口*/
    entry: {
        mynew: "./src/js/mynew.js",
        index: "./src/js/index.js",
        about: "./src/js/about.js",
        list: "./src/js/list.js",
        other: "./src/js/other.js",
        teacher: "./src/js/teacher.js"
    },
    output: {
        publicPath: "/",
        path: distPath,
        filename: "js/[name].[hash].bundle.js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        rules: [
            /*解决zepto无法模块化的问题*/
            {
                test: require.resolve("zepto"),
                loader: "exports-loader?window.Zepto!script-loader"
            },
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
        /*加载jQuery或者Zepto*/
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            // "window.jQuery": "jquery",
            $: "zepto"
        }),
        /*合并js代码*/
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            // chunks: jsCollection,
            // chunks: ["about", "index", "list", "mynew", "other", "teacher"],
            minChunks: 3
        }),
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
        name: "mynew",
        dir: "",
        title: "这是新一页"
    },
    {
        name: "index",
        dir: "",
        title: "这个是首页"
    },
    {
        name: "about",
        dir: "cn\\",
        title: "这个是关于页"
    },
    {
        name: "list",
        dir: "cn\\",
        title: "这个是列表页"
    },
    {
        name: "other",
        dir: "cn\\",
        title: "这个是外面的其他页"
    },
    {
        name: "teacher",
        dir: "cn\\",
        title: "教师节活动回顾"
    },
    {
        name: "other",
        dir: "cn\\others\\",
        title: "这个是其他页"
    }
];

//生成的html存放路径
htmlPages.forEach(pathname => {

    //将路径进行分割,使得生成的路径在dist根目录下, 必须使用\\, 防止生成的路径出错
    const resolvePath = pathname.split("src\\");

    let conf = {
        filename: resolvePath[1] + ".html",
        template: pathname + ".html",
        inject: true,
        minify: {                                           //压缩HTML文件
            removeComments: true,                           //移除HTML中的注释
            collapseWhitespace: false                       //删除空白符与换行符
        }
    }

    /*合并公共js代码*/
    const reg = /\/?(\w+)$/;
    const currentPath = (reg.exec(resolvePath[1]))[1];

    // const currentPath = resolvePath[1].split("\\")[resolvePath[1].split("\\").length - 1];
    conf.chunks = ["vendor", currentPath];

    for(let i in confTitle) {
        if ((confTitle[i].dir + confTitle[i].name) === resolvePath[1]) {
            conf.title = confTitle[i].title;
        }
    }

    //设置头部
    config.plugins.push(new HtmlWebpackPlugin(conf));
});

/*按文件名来获取入口文件(即需要生成的模板文件数量)*/
function getEntry(globPath, dirPath) {

    //匹配当前路径所得到的文件数组
    let files = glob.sync(globPath),
        entries = {},
        entry, dirname, basename, pathname, extname;

    for(let i = 0; i < files.length; i++) {
        entry = files[i];

        //返回所在路径的文件夹名称
        dirname = path.dirname(entry);

        //返回指定文件名的扩展名称
        extname = path.extname(entry);

        //返回制定的文件名, 返回结果可排除[ext]后缀字符串
        basename = path.basename(entry, extname);

        //格式化路径
        pathname = path.normalize(path.join(dirname, basename));

        //格式化路径
        dirPath = path.normalize(dirPath);

        if(pathname.startsWith(dirPath)) {
            pathname = pathname.substring(dirPath);
        }
        entries[pathname] = ["./" + entry];
    }

    return entries;
}