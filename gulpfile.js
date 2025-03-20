const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

async function imageminTask() {
    const imagemin = (await
        import ('gulp-imagemin')).default;
    return gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
}

gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
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

gulp.task('images', imageminTask);

gulp.task('copyHtml', function() {
    return gulp.src('app/pages/*.html')
        .pipe(gulp.dest('dist')) // Теперь HTML файлы копируются в dist/
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'dist',
            middleware: function(req, res, next) {
                res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline' 'unsafe-eval'");
                next();
            }
        }
    });

    gulp.watch('app/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/images/**/*', gulp.series('images'));
    gulp.watch('app/pages/*.html', gulp.series('copyHtml')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('copyHtml', 'scss', 'js', 'images', 'watch'));