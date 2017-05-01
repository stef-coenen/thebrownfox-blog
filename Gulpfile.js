require('es6-promise').polyfill();
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel");
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('copy-dependencies', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest('./design/js/lib/jquery'));

    /*gulp.src(['./node_modules/bootstrap/js/dist/util.js',
             './node_modules/bootstrap/js/dist/carousel.js'])
        .pipe(gulp.dest('./design/js/lib/bootstrap'))*/

    gulp.src(['./node_modules/bootstrap/scss/**/_*.scss'])
        .pipe(gulp.dest('./design/scss/vendor/bootstrap'));
});

gulp.task('compile-js', function() {
    gulp.src(['./design/js/lib/jquery/*.js',
             './design/js/lib/bootstrap/**/*.js'])
        //.pipe(uglify().on('error', gutil.log))
        .pipe(concat('/lib.js'))
        .pipe(gulp.dest('./design/js/dist/'));

    gulp.src(['./design/js/lib/google/*.js'])
        //.pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./design/js/dist/'));

    gulp.src(['./design/js/app/components/*.js',
             './design/js/app/functions/*.js',
             './design/js/app/modules/*.js',
             './design/js/app/lube.strapon.js'])
        .pipe(babel())
        //.pipe(uglify().on('error', gutil.log))
        .pipe(concat('/applib.js'))
        .pipe(gulp.dest('./design/js/dist/'));
});

gulp.task('compile-sass', function() {
    gulp.src('./design/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', 'ios >= 8'],
            cascade: false
        }))
        .pipe(sourcemaps.write({ sourceRoot: './dist' }))
        .pipe(gulp.dest('./design/css/'));
});

//Watch task
gulp.task('default', function() {
    gulp.watch('design/js/app/**/*.js', ['compile-js']);
    gulp.watch('design/scss/**/*.scss', ['compile-sass']);
});
