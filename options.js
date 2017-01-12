var pkgConfig = require('pkg-config')
var pkg = require('./package.json')

var workingDir = process.cwd()
var paths = require('./lib/findPaths')(workingDir)
var pkgCfgs = require('./lib/getPkgOpts')(workingDir, pkg.name)
configs = require('object-merge')(paths, pkgCfgs)

if (!configs.eslintConfig.configFile) {
  console.error('Could not find any `eslintrc` files in your project.')
  process.exit(1)
}
if (!configs.eslintPath) {
  console.error('Could not find ESLint in your project, '
                  + 'maybe you should install `standard` first.')
  process.exit(1)
}

console.log(pkg.name + ': Found eslintrc file: \n\t' + configs.eslintConfig.configFile)
console.log(pkg.name + ': Using eslint in: \n\t' + configs.eslintPath)

module.exports = {
  cmd: pkg.name,
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Live by your own standards!',
  eslint: require(configs.eslintPath),
  eslintConfig: configs.eslintConfig
}
