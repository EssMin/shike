		const gulp = require('gulp');
		const uglify = require('gulp-uglify');
		const concat = require('gulp-concat');
		const rename = require('gulp-rename');
		const imgmin =require('gulp-imagemin');
		const sass = require('gulp-sass');
		const  nano =require('gulp-cssnano');
		
		gulp.task('js',function(){
			gulp.src('./src/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./dist/js'));
		})
		
		gulp.task('imgmin',function(){
			gulp.src('./src/image/*.*')
			.pipe(imgmin())
			.pipe(gulp.dest('./dist/image'));
		})
		gulp.task('default',function(){
			gulp.watch('./src/js/*.js',['js']);
			gulp.watch('./src/image/*.*',['imgmin']);
			gulp.watch('./src/sass/*.scss',['sass']);
		})
		gulp.task('sass',function(){
			gulp.src('./src/sass/*.scss')
			.pipe(sass())
			.pipe(nano())
			.pipe(rename({"suffix" : ".min"}))
			.pipe(gulp.dest('./dist/css'));
		})