import gulp from 'gulp';
import webpack from 'webpack-stream';

const isProd = Boolean(process.env.NODE_ENV);

export const scripts = () =>
  gulp
    .src('src/js/index.js')
    .pipe(
      webpack({
        mode: isProd ? 'production' : 'development',
        devtool: isProd ? false : 'source-map',
        entry: './src/js/index.js',
        output: {
          filename: 'bundle.js',
        },
        optimization: {
          minimize: isProd,
        },
      })
    )
    .pipe(gulp.dest('dist/src/js'));
