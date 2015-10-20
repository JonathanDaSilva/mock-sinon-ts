var gulp   = require('gulp')
var $      = require('gulp-load-plugins')()
var merge  = require('merge2')
var CONFIG = require('yamljs').load(__dirname+'/config.yaml')

module.exports = function(cb) {
  var tsProject   = $.typescript.createProject('tsconfig.json', {
    typescript: require('typescript'),
    declaration: true,
    module: 'common',
    target: 'es5',
  })
  var tsStream = gulp.src(CONFIG.typescript.in)
    .pipe($.changed(CONFIG.out, { extension: '.js' }))
    .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
    .pipe($.typescript(tsProject))

  return merge([
    tsStream.js
      // Replace all the preprocessor extention
      // to their compiled version
      .pipe($.replace(".ts\"", ".js\""))
      .pipe($.replace(".ts\'", ".js\'"))
      .pipe(gulp.dest(CONFIG.out)),

    tsStream.dts
      .pipe(gulp.dest(CONFIG.typescript.definitions))
  ])

}
module.exports.dependencies = []
