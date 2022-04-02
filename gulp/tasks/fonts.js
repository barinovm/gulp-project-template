import gulp from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';

const getWoff2 = () =>
  gulp.src('src/fonts/*.ttf').pipe(ttf2woff2()).pipe(gulp.dest('src/fonts/'));

const transferFonts = () =>
  gulp.src('src/fonts/**/*.woff2').pipe(gulp.dest('dist/src/fonts/'));

export const fonts = gulp.series(getWoff2, transferFonts);
