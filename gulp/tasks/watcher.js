import gulp from 'gulp';
import { html } from './html.js';
import { styles } from './styles.js';
import { scripts } from './scripts.js';
import { images } from './images.js';

export const watcher = () => {
  gulp.watch('src/**/*.html', html);
  gulp.watch('src/**/*.less', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/img/src/**/*', images);
};
