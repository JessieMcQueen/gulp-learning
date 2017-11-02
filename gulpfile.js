'use strict'
let gulp = require('gulp');
let delCssLink = require('./gulp-css-delete/delCssLink');

gulp.task('delCssLink', function(){
	return gulp.src('./index.html')
	           .pipe(modify())
			   .pipe(gulp.dest('dest/'));
});
