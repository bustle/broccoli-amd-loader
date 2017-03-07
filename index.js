'use strict';
var Funnel = require('broccoli-funnel');
var Merge = require('broccoli-merge-trees');
var path = require('path');
var Plugin = require('broccoli-plugin');

var defaultDestDir = '/';

function loaderTree(destDir) {
  var loaderDir = path.dirname(require.resolve('loader.js'));
  return new Funnel(loaderDir, {
    include: ['loader.js'],
    destDir: destDir
  });
}

module.exports = function(tree, options) {
  options = options || {};
  var destDir = options.destDir || defaultDestDir;

  return new Merge([tree, loaderTree(destDir)]);
};
