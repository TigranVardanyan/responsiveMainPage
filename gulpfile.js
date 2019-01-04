var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.+(sass|scss)') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	/*browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });*/
	browserSync.init({
		proxy: "localhost/web(7)/Projects/project_mainPage/responsiveMainPage/app",
		port: 8000
	});
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.+(sass|scss)', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/*.+(php|html)' , browserSync.reload);
    gulp.watch('app/js/**/*.js' , browserSync.reload);

    // Наблюдение за другими типами файлов
});
gulp.task('build' , ['clean' , 'sass'], function() {
	var buildCss = gulp.src([
		'app/css/**/*.css'
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
		.pipe(gulp.dest('dist/logic'));
	var img = gulp.src([
		'app/img/**/*.*'])
		.pipe(gulp.dest('dist/img'));
	var libs = gulp.src([
		'app/libs/**/*.*'])
		.pipe(gulp.dest('dist/libs'));
	var fav = gulp.src([
		'app/*.ico'])
		.pipe(gulp.dest('dist/'));
	var robots = gulp.src([
		'app/robots.txt'])
		.pipe(gulp.dest('dist/'));
	var sitemap = gulp.src([
		'app/sitemap.xml'])
		.pipe(gulp.dest('dist/'));
	var cv = gulp.src([
		'app/*.pdf'])
		.pipe(gulp.dest('dist/'));
