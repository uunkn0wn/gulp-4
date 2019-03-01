module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/sass/main.sass')
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.sass({
                'include css': true
            }))
            .pipe($.plugins.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on('error', $.plugins.notify.onError({
                message: "Error: <%= error.message %>",
                title: "sass"
            }))
            .pipe($.plugins.csso())
            .pipe($.plugins.sourcemaps.write())
            .pipe($.gulp.dest('build/styles/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};