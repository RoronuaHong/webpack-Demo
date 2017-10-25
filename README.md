# webpack-Demo

##webpack多页自动化工程工具使用方法:

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