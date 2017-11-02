'use strict';

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    removelogging: 'grunt-remove-logging',
    filehash: 'grunt-file-hash'
  });

  var paths     = require('./config/_paths');
  var watch     = require('./config/tasks/watch');
  var connect   = require('./config/tasks/connect');

  /*----------------
    APP CONFIG
  ---------------*/
  var APP = {
    pkg: grunt.file.readJSON("package.json"),
    config: paths,
    watch: watch(paths),
    connect: connect(paths)
  };

  /*----------------
    INIT CONFIG
  -------------- -*/
  grunt.initConfig(APP);


  grunt.registerTask('serve', [
    'connect:livereload',
    'watch'
  ]);

};
