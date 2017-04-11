module.exports = {
  paths: {
    // source: './_posts',
    build: 'build',
  },
  assets: {
    source: 'source',
    build: 'build',
  },
  server: {
    proxy: '127.0.0.1:8000',
    port: 4000,
    notify: true,
    open: true,
    online: false,
  },
  styles: {
    prefix: [
      // For more browsers, see https://github.com/ai/browserslist
      // '> 1%',
      'last 1000 versions',
      // 'safari 3',
      // 'IE >= 9',
      // 'firefox 3.6',
      // 'opera 10',
      // 'chrome 1',
    ],
    include: [
      // 'node_modules',
      './bower_components/foundation-sites/scss/',
    ],
  },
  scripts: {
    // script options go here
  },
};
