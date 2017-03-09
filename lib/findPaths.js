var findExists = require('./findExists')

module.exports = function findPaths (workingDir) {
  return {
    eslintConfig: {
      configFile: findExists(workingDir,
        '.eslintrc.js',
        '.eslintrc.yaml' ,
        '.eslintrc.yml' ,
        '.eslintrc.json' ,
        '.eslintrc')
    },
    eslintPath: findExists(workingDir, 
        'node_modules/eslint/',
        'node_modules/standard/node_modules/eslint/',
        'node_modules/standard-flow/node_modules/eslint/'
    )
  }
}
