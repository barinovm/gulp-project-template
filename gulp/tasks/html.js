import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import typograf from 'gulp-typograf';
import htmlmin from 'gulp-htmlmin';
import versionNumber from 'gulp-version-number';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { htmlValidator } from 'gulp-w3c-html-validator';

const isProd = Boolean(process.env.NODE_ENV);

const versionConfig = {
  value: '%DT%',
  append: {
    key: '_v',
    cover: 0,
    to: [
      'css',
      {
        type: 'js',
        files: ['bundle.js'],
      },
    ],
  },
  output: {
    file: 'version.json',
  },
};

const htmlminConfig = {
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
  keepClosingSlash: true,
  sortAttributes: true,
  sortClassName: true,
};

export const htmlValidation = () =>
  gulp
    .src('dist/src/index.html')
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter());

export const html = () =>
  gulp
    .src('src/*.html')
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(fileInclude({ prefix: '@@' }))
    .pipe(gulpIf(isProd, versionNumber(versionConfig)))
    .pipe(typograf({ locale: ['ru', 'en-US'] }))
    .pipe(gulpIf(isProd, htmlmin(htmlminConfig)))
    .pipe(gulp.dest('dist/src/'))
    .pipe(browserSync.stream());
