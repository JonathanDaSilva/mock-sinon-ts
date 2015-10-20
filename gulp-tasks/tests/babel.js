var gulp   = require('gulp')
var $      = require('gulp-load-plugins')()
var CONFIG = require('yamljs').load(__dirname+'/../config.yaml')

module.exports = function(cb) {
  var tsProject   = $.typescript.createProject('tsconfig.json', {
    typescript: require('typescript'),
  })

  return gulp.src(CONFIG.test.in)
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject))
    // Replace all the preprocessor extention
    // to their compiled version
    .pipe($.replace(".ts\"", ".js\""))
    .pipe($.replace(".ts\'", ".js\'"))
    .pipe($.replace(".sass\"", ".css\""))
    .pipe($.replace(".sass\'", ".css\'"))
    .pipe($.babel({
      modules: 'common',
      loose: 'all',
    }))

    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(CONFIG.test.out))
}
module.exports.dependencies = []
