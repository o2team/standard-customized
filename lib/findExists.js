var path = require('path')
var fs = require('fs')

module.exports = function findExists (baseDir) {
  var paths = Array.prototype.slice.call(arguments, 1)
  for (var i = 0; i < paths.length; i++) {
    let p = path.join(baseDir, paths[i])
    if (fs.existsSync(p))
      return p
  }
}