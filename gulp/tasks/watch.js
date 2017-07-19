var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    localConfig = {
        scriptsFiles: './resources/assets/js/**/*.js',
        stylesFiles: './resources/assets/styles/**/*.scss'
    };

gulp.task('watch:scripts', function () {
    gulp.watch(localConfig.scriptsFiles, function () {
        runSequence('scripts', 'inject');
    });
});

gulp.task('watch:styles', function () {
    gulp.watch(localConfig.stylesFiles, function () {
        runSequence('styles', 'inject');
    });
});

gulp.task('watch', ['watch:scripts', 'watch:styles']);