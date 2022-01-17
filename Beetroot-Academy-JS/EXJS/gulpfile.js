const gulp        = require('gulp');
const browserSync = require('browser-sync');
const scss        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("src/**/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.{scss,sass}")
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
gulp.task('html', function() {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});
gulp.task('img', function() {
    return gulp.src("src/img/*.{jpeg,jpg,png,svg,gif,ico,icon,webp}")
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});
gulp.task('js', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});
gulp.task('watch', function() {
    gulp.watch("src/**/*.html", gulp.parallel('html'));
    gulp.watch("src/scss/**/*.{scss,sass}", gulp.parallel('styles'));
    gulp.watch("src/js/**/*.js", gulp.parallel('js'));
});
gulp.task('build',gulp.series("html", "styles", "js", "img"));


gulp.task('default', gulp.parallel('watch', 'server', 'build'));