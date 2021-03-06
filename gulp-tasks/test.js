var gulp   = require('gulp')
var $      = require('gulp-load-plugins')()
var CONFIG = require('yamljs').load(__dirname+'/config.yaml')

module.exports = function(cb) {
  $.sequence([
    'tests:clean',
    'tests:compiler',
    'tests:mocha',
    'tests:clean',
  ])(cb)
}
