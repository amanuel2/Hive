var gulp = require('gulp'),
           paths = require('./gulp/paths'),
           concat = require('gulp-concat'),
           uglify = require('gulp-uglify'),
           minifyCss = require('gulp-minify-css'),
           sass = require('gulp-sass'),
           rename = require('gulp-rename');

gulp.task("compile_lib", ['scripts:vendor','styles:vendor'])

gulp.task('watch', function(){
    gulp.watch('app/components/**/**/scss/*.scss', ['compileSCSS']);
    gulp.watch('app/components/**/controller/*.ctrl.js', ['scripts:app']);
    gulp.watch("app/shared/services/**/*.serv.js", ['scripts:app']);
    gulp.watch('./app/**/**/*.scss', ['compileSCSS']);
    gulp.watch('./app/**/*.js', ['scripts:app']);
    
})

gulp.task("scripts:vendor", function(){
     return gulp.src(paths.vendor_js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest_js));
})
gulp.task("styles:vendor", function(){
     return gulp.src(paths.vendor_styles)
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(gulp.dest(paths.dest_css));
})

gulp.task("scripts:app", function(){
     return gulp.src(paths.js)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest_js));
})


gulp.task('compileSCSS', 

                         [
                             "homeSCSS",
                             "meSCSS",
                             "discussionsSCSS",
                             "boardSCSS",
                             "registerSCSS",
                             "loginSCSS"
                         ]
          )

gulp.task('homeSCSS', function(done){
    gulp.src('app/components/home/scss/home.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/homeSCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/home/css'))
        .on('end', done)
})

gulp.task('meSCSS', function(done){
    gulp.src('app/components/me/scss/me.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/meCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/me/css'))
        .on('end', done)
})


gulp.task('discussionsSCSS', function(done){
    gulp.src('app/components/discussions/scss/discussions.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/discussionsCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/discussions/css'))
        .on('end', done)
})

gulp.task('boardSCSS', function(done){
    gulp.src('app/components/board/scss/board.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/boardCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/board/css'))
        .on('end', done)
})

gulp.task('registerSCSS', function(done){
    gulp.src('app/components/register/scss/register.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/registerCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/register/css'))
        .on('end', done)
})

gulp.task('loginSCSS', function(done){
    gulp.src('app/components/login/scss/login.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/HISTORY/CSS/loginCSS'))
        .pipe(minifyCss({
              keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('app/components/login/css'))
        .on('end', done)
})