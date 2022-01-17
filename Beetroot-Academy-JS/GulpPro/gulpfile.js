let project_folder = "dist";
let source_folder = "#src";
let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}
let { src, dest } = require('gulp'), //плагины
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require("gulp-sass")(require("sass")),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    webp = require("gulp-webp"),
    webphtml = require('gulp-webp-html'),
    webpcss = require('gulp-webp-css'),
    svgSprite = require('gulp-svg-sprite');



function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        post: 3000,
        notify: false
    })
}
//задачи выполнения hyml
function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

//задачи выполнения css
function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(webpcss()) 
        .pipe(dest(path.build.css)) //выгрузка 1 файла
        .pipe(clean_css()) //сжатие 2 файла этот и будет подключен в hyml чтобы быстро выгружался
        .pipe(
            rename({
                extname: ".min.css" // переименование файла 
            })
        )
        .pipe(dest(path.build.css)) //снова выгрузка файла
        .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
        .pipe(browsersync.stream())
        

}
//задачи выполнения JS
function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js" // переименование файла сжатого файла
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}
//задачи выполнения img
function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(webpcss({webpClass: '', noWebpClass: '.no-webp'}))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}
gulp.task('svgSprite', function(){   //gulp svgSprite запускается отдельно в новом терминале
    return gulp.src([source_folder + '/iconsprite/*.svg'])   //for icon
    .pape(svgSprite({
        mode:{
            stack:{
                sprite:"../icons/icons.svg",    //sprite file name
                // example:true
            }
        }
    }
    ))
    .pipe(dest(path.build.img))
})

function fonts() {
    src(path.src.fonts + "*.ttf")
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
};
function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync);



exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;