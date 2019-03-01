module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.plugins.tinypng('4KppMqSKXnQZz3GS1qvdMwBt9DRzxXNb'))
            .pipe($.gulp.dest('build/img'));
    });
};