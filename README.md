## broccoli-amd-loader

Returns a tree that merges in an amd loader ([loader.js](https://github.com/ember-cli/loader.js) to the given tree at `<destDir>/loader.js`.

Example:

```
var amdLoader = require('broccoli-amd-loader');
var tree = someTree();
tree = amdLoader(tree, {
  destDir: '/tests'
});

// tree now has '/tests/loader.js' available
```
