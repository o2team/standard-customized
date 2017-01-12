# standard-own

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/standard-own.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/standard-own

**Use your own eslint config to lint files.**

Unlike [feross/standard](https://github.com/feross/standard), this module gives you much more power to customize your styles, which will:

- find your own `.eslintrc.json` or `.eslintrc` instead of providing you a pre-defined configuration
- allow you to specify a eslint file location
- allow you to add your own rules

## Install

Install with npm:
```bash
npm install standard standard-own --save-dev
```

or use yarn:
```bash
yarn add standard standard-own --dev
```

### What you might do next

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "*",
      "standard-own": "^1.0.0"
    },
    "scripts": {
      "lint": "standard-own --fix --verbose"
    }
  }
  ```

2. Check style automatically with the following command

  ```bash
  # use --slient to suppress the stupid npm warnings
  $ npm run lint --slient
  ```

## Advanced Usage

This module follows all rules in your `.eslintrc` files,    
but we also provide some optional arguments for customization.

Here's the example of options in `package.json`:

```js
{
  "standard-own": {

    // Optionally specify an ESLint module relative location
    "eslintPath": "node_modules/eslint/",
    
    // Options passed to ESLint CLIEngine
    // Reference for all available options:
    //    http://eslint.org/docs/developer-guide/nodejs-api#cliengine
    "eslintConfig": {
      
      // individual rules configurable
      "rules": {
        "no-console": 0,
        "no-unused-vars": 0
      }
    }
  }
}
```


## FAQ

### **Can you make rule X configurable?**

YES, every rules depend on your eslint configuration.   
But you can also add some individual rules (see `Advanced Usage` above) to override what's in `.eslintrc`.

### **How do I make the output all colorful and pretty?**

Check [feross/standard#is-there-an-automatic-formatter](https://github.com/feross/standard#is-there-an-automatic-formatter).

### **Is there a Git pre-commit hook?**

I recommand using [husky](https://github.com/typicode/husky), which is pretty simple.

To ensure every commit follows your code style, you may want to install [husky](https://github.com/typicode/husky) and [snazzy](https://github.com/feross/snazzy) first:

```bash
npm install husky snazzy --save-dev
```

And add the following to your `package.json` file:

```json
{
  "scripts": {
    "lint": "standard-own --fix --verbose | snazzy",
    "git-hook": "npm run lint --silent"
  }
}
```



## Thanks

Thank you [@flet](https://github.com/flet) for making everything possible.

Thank you [@feross](https://github.com/feross) for creating [standard](https://github.com/feross/standard).

Thank you all for playing along!


## License

[MIT](LICENSE.md). Copyright (c) [O2 Team](www.aotu.io).

