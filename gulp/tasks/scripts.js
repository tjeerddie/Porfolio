var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    iife = require('gulp-iife'),
    rename = require('gulp-rename'),

    config = require('../config'),
    taskOptions = config.getKeys(),

    localConfig = {
        src: ['./resources/assets/js/**/*.js'],
        dest: './public/js/',
        buildFile: 'app.js',
        minifiedFile: 'app.min.js'
    };

gulp.task('scripts', ['clean:scripts'], function () {
    return gulp.src(localConfig.src)
        .pipe(plumber({ errorHandler: config.onError }))
        .pipe(gulpif(taskOptions.sourcemaps ,sourcemaps.init()))
        .pipe(gulpif(taskOptions.concat, concat(localConfig.buildFile)))
        .pipe(iife())
        .pipe(gulpif(taskOptions.minify, uglify()))
        .pipe(gulpif(taskOptions.minify, rename(localConfig.minifiedFile)))
        .pipe(gulpif(taskOptions.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(localConfig.dest));
});
