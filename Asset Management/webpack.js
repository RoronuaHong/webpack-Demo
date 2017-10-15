import webpack from "webpack";

//webpack 不会并行执行多个配置。每个配置只会在前一个处理结束后才会开始处理。
// 如果你需要 webpack 并行执行它们，你可以使用像 parallel-webpack 这样的第三方解决方案。
const compile = webpack([
    { /*配置对象*/ },
    { /*配置对象*/ },
    { /*配置对象*/ }
]);

compile.run((err, stats) => {
    // ...
});

const watching = compile.watch({
    watchOption: {
        aggregateTimeout: 300,      //当第一个文件更改，会在重新构建前增加延迟
        poll: 1000,                  //每秒检查一次变动
        ignored: /node_modules/
    }
}, (err, stats) => {
    //在这里打印watch/build 结果...
    if(err) {
        console.error(err.stack || err);
        if(err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toJson;

    if(stats.hasError()) {
        console.error(info.errors);
    }

    if(stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    console.log(stats.toString({
        chunks: false,              //使构建过程更静默输出
        colors: true                //在控制台展示颜色
    }));
});