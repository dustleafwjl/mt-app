var gulp = require("gulp");

// 使用的插件:
// html: 压缩html
var htmlClean = require("gulp-htmlclean");
// css: 将less转换成css
var toCss = require("gulp-less");
// css: 压缩css
var cleanCss = require("gulp-clean-css");
// css: 给css的里面不兼容属性加上前缀名
var postCss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
// js: 压缩js
var uglify = require("gulp-uglify");
// js: 去掉js中的调试语句
var stripDebug = require("gulp-strip-debug");
// img: 压缩图片
var imageMin = require("gulp-imagemin");
// server: 开启服务器
var connect = require("gulp-connect");
// 文件资源路径
var folder = {
    src: "src/",
    dist: "dist/"
};

// 判断当前环境变量
var devMode = process.env.NODE_ENV == "development";
// export NODE_ENV = development  设置环境变量

// 处理html
gulp.task("html", function () {
    var page = gulp.src(folder.src + "html/*")
        .pipe(connect.reload());
    if (!devMode) {
        page.pipe(htmlClean());
    }
    return page.pipe(gulp.dest(folder.dist + "html/"))
});

// 处理css
gulp.task("css", function () {
    var page = gulp.src(folder.src + "css/*")
        .pipe(connect.reload())
        .pipe(toCss())
        .pipe(postCss([autoprefixer()]));
    if (!devMode) {
        page.pipe(cleanCss());
    }
    return page.pipe(gulp.dest(folder.dist + "css/"))
});

// 处理js
gulp.task("js", function () {
    var page = gulp.src(folder.src + "js/*")
        .pipe(connect.reload());
    if (!devMode) {
        page.pipe(stripDebug())
            .pipe(uglify())
    }
    return page.pipe(gulp.dest(folder.dist + "js/"))
});

// 处理图片
gulp.task("image", function () {
    return gulp.src(folder.src + "img/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "img/"))
});

// 开启服务器
gulp.task("server", function () {
    connect.server({
        port: "7878",
        livereload: true
    });
})

gulp.task("watch", () => {
    gulp.watch(folder.src + "html/*", gulp.series("html"));
    gulp.watch(folder.src + "css/*", gulp.series("css"));
    gulp.watch(folder.src + "js/*", gulp.series("js"));
})

gulp.task("default", gulp.parallel("html", "css", "js", "image", "server",  "watch", () => {
    console.log('文件打包成功！！！');
    // gulp.watch(folder.src + "html/*", ["html"]);
}));
















// less-->自动添加css前缀-->压缩-->css文件