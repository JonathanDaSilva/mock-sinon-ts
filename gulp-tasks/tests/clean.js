var gulp   = require('gulp')
var del    = require('del')
var CONFIG = require('yamljs').load(__dirname+'/../config.yaml')

module.exports = function(cb) {
  return del([
    CONFIG.test.out
  ]);
}
module.exports.dependencies = []
