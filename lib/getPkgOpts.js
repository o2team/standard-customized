var path = require('path')
var fs = require('fs')

module.exports = function getPkgOpts (workingDir, pkgName) {

  var pkgFile = require('./findExists')(workingDir, 'package.json')
  if (pkgFile)
    return require(pkgFile)[pkgName]
}
