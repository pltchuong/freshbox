module.exports = function(grunt) {

  var Helpers = require('./tasks/helpers'),
      filterAvailable = Helpers.filterAvailableTasks,
      _ = grunt.util._;

  Helpers.pkg = require("./package.json");

  if (Helpers.isPackageAvailable("time-grunt")) {
    require("time-grunt")(grunt);
  }

  var config = require('load-grunt-config')(grunt, {
    configPath: "tasks/options",
    init: false
  });
  grunt.loadTasks('tasks');

  config.env = process.env;


  // App Kit's Main Tasks
  // ====================

  // Default Task
  // ------------------
  grunt.registerTask('default', "Build (in debug mode) & test your application.", ['test']);


  // Building
  // --------
  grunt.registerTask('build:dist', "Build a minified & production-ready version of your app.", [
                     'clean:build',
                     'clean:release',
                     'copy:stage',
                     'lock',
                     'concurrent:dist', // Main phase, see config below
                     'copy:vendor',
                     'unlock',
                     'dom_munger:distEmber',
                     'dom_munger:distHandlebars',
                     'useminPrepare',
                     'concat',
                     'uglify',
                     'copy:dist',
                     'rev',
                     'usemin'
                     ]);

  grunt.registerTask('build:debug', "Build a development-friendly version of your app.", [
                     'clean:build',
                     'copy:stage',
                     'lock',
                     'concurrent:debug', // Main phase, see config below
                     'unlock'
                     ]);

  // Testing
  // -------
  grunt.registerTask('test', "Run your apps's tests once. Uses Google Chrome by default. Logs coverage output to tmp/public/coverage.", [
                     'build:debug', 'copy:vendor', 'karma:test' ]);

  grunt.registerTask('test:ci', "Run your app's tests in PhantomJS. For use in continuous integration (i.e. Travis CI).", [
                     'build:debug', 'copy:vendor', 'karma:ci' ]);

  grunt.registerTask('test:browsers', "Run your app's tests in multiple browsers (see tasks/options/karma.js for configuration).", [
                     'build:debug', 'copy:vendor', 'karma:browsers' ]);

  grunt.registerTask('test:server', "Start a Karma test server. Automatically reruns your tests when files change and logs the results to the terminal.", [
                     'build:debug',
                     'karma:server',
                     'expressServer:debug',
                     'watch'
                     ]);

  // Development Servers
  // -------------------
  grunt.registerTask('server', "Run your server in development mode, auto-rebuilding when files change.", [
                     'build:debug',
                     'expressServer:debug',
                     'watch'
                     ]);

  grunt.registerTask('server:dist', "Build and preview production (minified) assets.", [
                     'build:dist',
                     'expressServer:dist:keepalive'
                     ]);



  // Inner workings of the build tasks
  // =================================

  // Parallelize most of the build process
  _.merge(config, {
    concurrent: {
      dist: [
        "buildTemplates:dist",
        "buildScripts",
        "buildStyles"
      ],
      debug: [
        "buildTemplates:debug",
        "buildScripts",
        "buildStyles"
      ]
    }
  });

  // Templates
  grunt.registerTask('buildTemplates:dist', filterAvailable([
                     'emblem:compile',
                     'emberTemplates:dist'
                     ]));

  grunt.registerTask('buildTemplates:debug', filterAvailable([
                     'emblem:compile',
                     'emberTemplates:debug'
                     ]));

  // Scripts
  grunt.registerTask('buildScripts', filterAvailable([
                     'coffee',
                     'copy:prepare',
                     'transpile',
                     'jshint',
                     'concat_sourcemap'
                     ]));

  // Styles
  grunt.registerTask('buildStyles', filterAvailable([
                     'compass:compile',
                     'sass:compile',
                     'less:compile',
                     'stylus:compile',
                     'cssmin'
                     ]));


  grunt.initConfig(config);
};
