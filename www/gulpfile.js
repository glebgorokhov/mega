'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        libs: 'build/libs/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/*.scss',
        img: 'src/img/**/*.*',
        libs: 'src/libs/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: 'build'
};


gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

// Build Modal
//--------------------------------------
gulp.task('modal:build', function () {
    gulp.src(path.src.modal)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.modal));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
           , cascade: false
           , remove: true
        }))
        .pipe(cssmin({ restructuring: false, semanticMerging: false }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(uglify().on('error', function (e) { console.log(e.message) }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('libs:build', function () {
    gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs));
});

gulp.task('build', [
    'html:build',
    'style:build',
    'image:build',
    'js:build',
    'fonts:build',
    'libs:build'
]);

gulp.task('watch', function () {
    gulp.watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    gulp.watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    gulp.watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    gulp.watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
});


gulp.task('default', ['build', 'watch']);