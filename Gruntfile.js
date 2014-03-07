module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      up_server: {
        options: {
          stdout: true
        },
        command: 'node server.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', 'shell:up_server');
};
