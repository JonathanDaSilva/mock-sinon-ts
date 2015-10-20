var gulp   = require('gulp')
var $      = require('gulp-load-plugins')()
var CONFIG = require('yamljs').load(__dirname+'/../config.yaml')

module.exports = function(cb) {
  return gulp.src(CONFIG.test.tests)
    .pipe($.mocha(CONFIG.test.config))
}
