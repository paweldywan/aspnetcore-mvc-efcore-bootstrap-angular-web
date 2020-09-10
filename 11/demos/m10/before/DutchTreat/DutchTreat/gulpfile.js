/// <binding AfterBuild='default' />
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("minify", function () {
    return gulp.src("wwwroot/js/**/*.js") // Wszystkie pliki o rozszerzeniu js z folderu js znajdującym się w wwwroot i jego podfolderów
        .pipe(uglify()) // Minifikacja plików
        .pipe(concat("dutchtreat.min.js")) // Złączenie plików w jeden plik
        .pipe(gulp.dest("wwwroot/dist")); // Zapisanie plików
});

gulp.task('default', gulp.series('minify'));