import gulp from 'gulp';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

const minImages = () =>
  gulp
    .src('src/img/**/*.*')
    .pipe(newer('dist/src/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/src/img/'));

const getSvgSprite = () =>
  gulp
    .src('dist/src/img/svg/icon-*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('dist/src/img/svg/'));

const getWebp = () =>
  gulp
    .src('dist/src/img/*.{jpg,png}')
    .pipe(
      webp({
        quality: 90,
      })
    )
    .pipe(gulp.dest('dist/src/img/'));

const transferFavicon = () =>
  gulp.src('src/favicon.svg').pipe(gulp.dest('dist/src/'));

export const images = gulp.series(
  minImages,
  getWebp,
  getSvgSprite,
  transferFavicon
);
