var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	del = require('del');

gulp.task('mytask' , function() {
	console.log('hello');
	});

gulp.task('sass' , function() {
	return gulp.src('app/sass/**/*.+(sass|scss)')
			.pipe(sass())
			.pipe(gulp.dest('app/css/'))
	})

gulp.task('watch' , function() {
	gulp.watch('app/sass/**/*' , ['sass'])
	});

gulp.task('clean' , function() {
	return del.sync('dist'); //удальяем папку дист перед сборкой
	});

gulp.task('build' , ['clean' , 'sass'], function() {
	var buildCss = gulp.src([
		'app/css/main.css'
		])
		.pipe(gulp.dest('dist/css'));
	})
	var buildjs = gulp.src([
		'app/js/script.js'])
		.pipe(gulp.dest('dist/js'));
	var buildHtml = gulp.src([
		'app/*.html'])
		.pipe(gulp.dest('dist/'));
	var buildPhp = gulp.src([
		'app/*.php'])
		.pipe(gulp.dest('dist/'));
	var logic = gulp.src([
		'app/logic/**/*.*'])
		.pipe(gulp.dest('dist/logic'))
