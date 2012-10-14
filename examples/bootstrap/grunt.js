/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    },
    dry: {
      files: ['css/bootstrap.css']
    }
  });

  grunt.loadTasks('tasks');
  // Default task.
  grunt.registerTask('default', 'lint dry');

};
