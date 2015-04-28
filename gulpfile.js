var gulp = require('gulp');
var react = require('gulp-react');
var direact = require('gulp-direact');
var prettify = require('gulp-prettify');

var path = {
   ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
   HTML: 'src/index.html',
   DEST_HTML: 'dist',
   JS: ['src/js/*.js', 'src/js/**/*.js'],
   DEST_JS: 'dist/js'
};

gulp.task('transformJS', function(){
   gulp.src(path.JS)
   .pipe(react())
   .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('transformHTML', function(){
   gulp.src(path.HTML)
   .pipe(direact())
   .pipe(prettify())
   .pipe(gulp.dest(path.DEST_HTML));
});

gulp.task('watch', function(){
   gulp.watch(path.ALL, ['transformJS', 'transformHTML']);
});

gulp.task('default', ['transformJS', 'transformHTML']);
