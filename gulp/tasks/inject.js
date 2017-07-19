var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    inject = require('gulp-inject'),

    config = require('../config'),
    taskOptions = config.getKeys(),

    localConfig = {
        src: ['./public/index.html'],
        target: ['./public/css/*.css', './public/js/*.js'],
        dest: './public/'
    };

gulp.task('inject', function () {
    return gulp.src(localConfig.src)
        .pipe(plumber({ errorHandler: config.onError }))
        .pipe(inject(gulp.src(localConfig.target), { ignorePath: '/public/' }, {read: false}))
        .pipe(gulp.dest(localConfig.dest));
});
