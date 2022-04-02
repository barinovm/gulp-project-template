import gulp from 'gulp';
import { html, htmlValidation } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { cleanDist } from './gulp/tasks/cleanDist.js';
import { fonts } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { server } from './gulp/tasks/server.js';
import { watcher } from './gulp/tasks/watcher.js';

export default gulp.series(
  gulp.parallel(html, styles, scripts, images),
  gulp.parallel(server, watcher)
);

export const build = gulp.series(
  cleanDist,
  gulp.parallel(html, styles, scripts, images, fonts)
);

export { html, zip, cleanDist, htmlValidation };
