var gulp = require('gulp');
var react = require('gulp-react');
var direact = require('gulp-direact');

var path = {
   HTML: 'src/index.html',
   ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
   JS: ['src/js/*.js', 'src/js/**/*.js'],
   DEST_JS: 'dist/js',
   DEST: 'dist'
};

gulp.task('transformJS', function(){
   gulp.src(path.JS)
   .pipe(react())
   .pipe(gulp.dest(path.DEST_JS));
});

gulp.task('transformHTML', function(){
   gulp.src(path.HTML)
   .pipe(direact())
   .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
   gulp.watch(path.ALL, ['transformJS', 'transformHTML']);
});

gulp.task('default', ['transformJS', 'transformHTML']);
