'use strict';
var funnel = require('broccoli-funnel');
var merge = require('broccoli-merge-trees');
var path = require('path');

var defaultDestDir = '/';

function loaderTree(destDir) {
  var loaderDir = path.dirname(require.resolve('loader.js'));
  return funnel(loaderDir, {
    include: ['loader.js'],
    destDir: destDir
  });
}

module.exports = function(tree, options) {
  options = options || {};
  var destDir = options.destDir || defaultDestDir;

  return merge([tree, loaderTree(destDir)]);
};
