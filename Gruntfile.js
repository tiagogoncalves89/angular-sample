module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      up_server: {
        options: {
          stdout: true
        },
        command: 'node server.js'
      },
      run_tests: {
        options: {
          stdout: true
        },
        command: 'node_modules/protractor/bin/protractor test/config.js'
      }
    },
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: '.',
          outdir: 'docs',
          exclude: 'node_modules,app/bower_components,test'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');

  grunt.registerTask('default', ['shell:up_server']);
  grunt.registerTask('test', ['shell:run_tests']);
  grunt.registerTask('doc', ['yuidoc:compile']);

};
