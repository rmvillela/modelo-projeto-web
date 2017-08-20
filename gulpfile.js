var gulp = require('gulp');
var gulp = require('gulp-sass');

gulp.task('sass', function(){ //compila os arquivos .scss para .css
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() { //verifica todas as alterações feitas nos arquivos .scss
    gulp.watch('sass/*.scss', ['sass'])
});

