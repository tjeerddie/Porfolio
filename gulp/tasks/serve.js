var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect'),

    config = require('../config'),
    taskOptions = config.getKeys(),

    localConfig = {
        src: './public/',
        appFiles: ['./public/**/*.*', './resources/templates/**/*.html'],
        defaultPort: 5000
    };

gulp.task('serve', function () {
    if (taskOptions.watch) {
        browserSync({
            server: {
                baseDir: localConfig.src
            },
            files: localConfig.appFiles,
            reloadDelay: 1000,
            open: false,
            port: localConfig.defaultPort
        });
    } else {
        connect.server({
            root: localConfig.src,
            port: process.env.PORT || localConfig.defaultPort
        });
    }
})