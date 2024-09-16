const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

async function imagemin() {
    const imagemin = (await
        import ('gulp-imagemin')).default;
    return gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('images', imagemin);

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('app/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/images/**/*', gulp.series('images'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('scss', 'js', 'images', 'watch'));