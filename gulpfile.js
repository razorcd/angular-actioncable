var gulp = require('gulp');
var chai = require('chai');
var Server = require('karma').Server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var clean = require('gulp-clean');
var path = require('path');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var eventStream = require('event-stream');

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');

var sourceFiles = [
  path.join(sourceDirectory, '/**/*.js')
];

var lintFiles = [
  'gulpfile.js'
  // Karma configuration
  // 'karma-*.conf.js'
].concat(sourceFiles);


// Build JavaScript distribution files
gulp.task('build', ['clean'], function() {
  return eventStream.merge(gulp.src(sourceFiles))
    .pipe(plumber())
    .pipe(concat('angular-actioncable.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(ngAnnotate())
    .pipe(uglify({mangle: false}))
    .pipe(rename('angular-actioncable.min.js'))
    .pipe(gulp.dest('./dist/'));
});

// removes the dist folder
gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

// Validate source JavaScript
gulp.task('jshint', function () {
  gulp.src(lintFiles)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// watch for changes
gulp.task('watch', function () {
  gulp.watch([sourceFiles], ['build']);
});

// Run test once and exit
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test-dist', ['build'], function (done) {
  new Server({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test-min', ['build'], function (done) {
  new Server({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('release', ['jshint', 'test', 'test-dist'], function(done){
  gulp.task('test-min');
  done();
}); //runs `build` too as task dependency

gulp.task('serve', ['test', 'watch', 'build']);
gulp.task('default', []);





