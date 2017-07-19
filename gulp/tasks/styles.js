var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),

    config = require('../config'),
    taskOptions = config.getKeys(),

    localConfig = {
        src: ['./resources/assets/styles/*.scss'],
        dest: './public/css/',
        base: './resources/assets/styles',
        minifiedFile: 'app.min.css'
    };

gulp.task('styles', ['clean:styles'], function () {
    return gulp.src(localConfig.src, { base: localConfig.base })
        .pipe(plumber({errorHandler: config.onError}))
        .pipe(gulpif(taskOptions.sourcemaps, sourcemaps.init()))
        .pipe(gulpif(taskOptions.minify, sass({outputStyle: 'compressed'}), sass({outputStyle: 'nested'})))
        .pipe(gulpif(taskOptions.minify, rename(localConfig.minifiedFile)))
        .pipe(gulpif(taskOptions.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(localConfig.dest));
});