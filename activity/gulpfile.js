const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('assignment/css/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('assignment/css'));
});
// Watch task for scss compile
