"use strict";

const del = require('del');
const gulp = require('gulp');
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

gulp.task('sass-css-grid-layout:build', ['sass:build'], () => {
  return gulp.src('web/styles/styles-css-grid-layout.scss')
             .pipe(sourcemaps.init())
             .pipe(sassGlob())
             .pipe(sass().on('error', sass.logError))
             // .pipe(rename('all.css'))
             .pipe(sourcemaps.write('./'))
             .pipe(gulp.dest('web/styles/css/'));
});

gulp.task('sass:watch', ['sass-css-grid-layout:build'], () => {
  gulp.watch('web/styles/*.scss', ['sass-css-grid-layout:build'])
});

gulp.task('watch', ['sass:watch']);

gulp.task('default', ['sass:build']);
