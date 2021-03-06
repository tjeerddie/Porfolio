var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    iife = require('gulp-iife'),
    rename = require('gulp-rename'),

    config = require('../config'),
    taskOptions = config.getKeys(),

    localConfig = {
        src: ['./resources/assets/js/**/!(main)*.js', './resources/assets/js/main.js'],
        dest: './public/js/',
        buildFile: 'app.js',
        minifiedFile: 'app.min.js'
    };

gulp.task('scripts', ['clean:scripts'], function () {
    return gulp.src(localConfig.src)
        .pipe(plumber({ errorHandler: config.onError }))
        .pipe(gulpif(taskOptions.sourcemaps ,sourcemaps.init()))
        .pipe(gulpif(taskOptions.concat, concat(localConfig.buildFile)))
        .pipe(gulpif(taskOptions.minify, concat(localConfig.minifiedFile)))
        .pipe(iife({params: ["window", "document"], args: ["window", "document"]}))
        .pipe(gulpif(taskOptions.minify, uglify()))
        .pipe(gulpif(taskOptions.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(localConfig.dest));
});
