import gulp from 'gulp';
import gulpZip from 'gulp-zip';
import nodePath from 'path';
import del from 'del';

const rootFolder = nodePath.basename(nodePath.resolve());

export const zip = () => {
  const fileName = `${rootFolder}.zip`;

  del(fileName);

  return gulp
    .src('./dist/**/*.*')
    .pipe(gulpZip(fileName))
    .pipe(gulp.dest('./'));
};
