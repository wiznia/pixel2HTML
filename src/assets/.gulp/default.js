'use strict';

var gulp = require('gulp');


gulp.task('default', [
  'main:markup',
  'main:static',
  'main:styles',
  'main:scripts',
  
  
  'vendor:jquery',
  'vendor:owlcarousel'
  
]);
