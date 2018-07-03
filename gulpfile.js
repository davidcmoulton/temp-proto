"use strict";

const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');

gulp.task('css:clean', () => {
  del(['./web/styles/css/*']);
});

gulp.task('sass:build', ['css:clean'], () => {
  return gulp.src('web/styles/styles.scss')
             .pipe(sourcemaps.init())
             .pipe(sassGlob())
             .pipe(sass().on('error', sass.logError))
             // .pipe(rename('all.css'))
             .pipe(sourcemaps.write('./'))
             .pipe(gulp.dest('web/styles/css/'));
});

gulp.task('default', ['sass:build']);

