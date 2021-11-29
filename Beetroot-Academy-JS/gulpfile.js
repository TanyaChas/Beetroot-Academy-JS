const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/scss/*.+(scss|sass)")
        .pip(sass()) // создать
        .pipe(gulp.dest("src/css")) // созданое положить в этот файл
        .pip(browserSync.stream()); //после будет обновляться страница
})
gulp.task('watch', function() {
    gulp.watch("src/scss/*.+(scss|sass)", gulp.parallel('server', 'styles'));
    gulp.watch("src/*.html").on("change", browserSync.reload);
});
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));