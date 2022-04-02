import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import sourcemap from 'gulp-sourcemaps';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import browserSync from 'browser-sync';

const isProd = Boolean(process.env.NODE_ENV);

export const styles = () =>
  gulp
    .src('src/less/style.less')
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(gulpIf(!isProd, sourcemap.init()))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpIf(isProd, csso({ forceMediaMerge: true, comments: false })))
    .pipe(gulpIf(!isProd, sourcemap.write('.')))
    .pipe(gulp.dest('dist/src/css/'))
    .pipe(browserSync.stream());
