'use strict';

var gulp = require('gulp');

var plumber = require('gulp-plumber');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');


var onError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('vendor:owlcarousel:scripts', function() {

  return gulp.src('src/assets/vendor/owlcarousel/owl.carousel.min.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('vendor:owlcarousel', ['vendor:owlcarousel:scripts']);
