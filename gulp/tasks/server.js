import browserSync from 'browser-sync';

export const server = () => {
  browserSync.init({
    server: 'dist/src',
    notify: false,
    ui: false,
  });
};
