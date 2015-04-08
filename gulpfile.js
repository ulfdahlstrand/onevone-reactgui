var gulp = require('gulp');
var jest = require('jest-cli');
var del = require('del');
var jestConfig = require('./package.json').jest;


gulp.task('test', [ 'transform' ],  function (done) {
  jest.runCLI({ config: jestConfig }, ".", function () {
    del([
      jestConfig.rootDir
    ], done);
  });
});

var react = require('gulp-react');
var strip = require('gulp-strip-code');

gulp.task('transform', function () {
  return gulp.src('./src/**/*.js')
    .pipe(react())
    .pipe(strip({
      start_comment: "start-webpack-block",
      end_comment: "end-webpack-block"
    }))
    .pipe(gulp.dest(jestConfig.rootDir));
});

gulp.task('tdd', function (done) {
  gulp.watch([ "./src/**/*.js" ], [ 'test' ]);
});


