# AST-based Tooling
* **A**bstract **S**yntax **T**ree

## Linting - ESLint
* linting tools grand-daddy: Douglas Crockford's [JSLint](https://github.com/douglascrockford/JSLint)
* most common one now [ESLint](https://www.npmjs.com/package/eslint)

How it works:
1. create an AST using [espree](https://www.npmjs.com/package/espree) parser or another defined in [config](https://eslint.org/docs/user-guide/configuring#specifying-parser)
    - note [Babel-ESLint](https://www.npmjs.com/package/babel-eslint) option for experimental features or typescript
2. treewalk via [estraverse](https://www.npmjs.com/package/estraverse)
3. apply rules

Create a rule:  
See [ast example project](./ast/parse.js).

Package rules in a plugin

Group rules together:
* recommended in rule metadata: ```"extends": "eslint:recommended"```
* group rules (and plugins) in config files
* reference other config files with ```extends```

More Salient Stuff:
* environments used to set global
* hierarchy of configs

## Transpiling - Babel
TBD...  
[Only reference you need for now](https://www.youtube.com/watch?v=40abpedBKK8&feature=youtu.be)
