var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var bootlint = require('gulp-bootlint');
var gulpStylelint = require('gulp-stylelint');

const css = () => {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.stream());
}

const browserSync = () => {
    return bs.init({
        server: {
            baseDir: './'
        }
    });
}

const watchFiles = () => {
    gulp.watch('sass/*.scss', css);
    gulp.watch('*.html').on('change', bs.reload);
}

const watch = gulp.parallel(watchFiles, browserSync);

// Lint Bootstrap in HTML
gulp.task('bootlint', () => {
  return gulp.src('./index.html')
    .pipe(bootlint());
});

// Lint Sass files
gulp.task('lint-sass', function lintCssTask() {
  return gulp.src('sass/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

// Compile Sass to CSS
gulp.task('sass', () => {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

exports.watch = watch;
exports.css = css;
