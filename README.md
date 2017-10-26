webpack-Demo
================

##实现功能如下:
----------------
        1.通过在src下编写html、css和js, 通过`npm start`在开发环境下可以进行调试, 使用`npm run build`可以打包生成dist文件夹下相应位置的生产版本;
        2.在src/cn文件夹下可以创建多个多个文件夹, 里面放置多个html文件(名称不能相同);
        3.在scss文件夹下可以使用css和scss文件(相对应的文件名必须与html一致), 实现自动添加前缀, 自动压缩功能;
        4.在js文件下可以存放一些lib库和常用js工具, 实现去除后缀、自动压缩功能;

###webpack多页自动化工程工具使用方法:

        1.先安装依赖包(建议使用cnpm):
            `npm i`

        2.在src下面创建相应的html、scss和js(html的名字必须跟css和js的名字一致);

        3.每一个的html名字不能重复;

        4.每次新增一个页面必须在webpack.common.js中进行修改:
            `//新增title
             const confTitle = [
                 {
                     name: "mynew",         //html的名字(与css和js的名字一致)
                     dir: "cn\\others\\",   //路径(例如: cn文件夹下的other文件夹下的文件)
                     title: "这是新一页"     //设置title
                 }
             ]`

        5.添加入口文件:
            `entry: {
                 mynew: "./src/js/mynew.js"     //设置js的名字和路径
            }`

        6.develop环境下运行:
            `npm start`

        7.production生成:
            `npm run build`

        8.默认为移动端适配:
            `//如要修改为px, 将如下代码注释即可:
            /*将px转换成rem*/
            {
                loader: "webpack-px-to-rem",
                query:{
                    // 1rem=npx 默认为 75
                    basePx: 75,
                    // 只会转换大于min的px 默认为0
                    // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
                    min: 1,
                    // 转换后的rem值保留的小数点后位数 默认为3
                    floatWidth: 2
                }
            }

            //将flexible去掉
            conf.chunks = ["flexible", currentPath];
            `

        9.默认全局使用zepto:
            `//可以修改为jquery
            new webpack.ProvidePlugin({
                 // $: "jquery",
                 // jQuery: "jquery",
                 // "window.jQuery": "jquery",
                 $: "zepto"
             })`