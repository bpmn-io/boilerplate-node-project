module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      sources: 'lib',
      tests: 'test'
    },

    jshint: {
      src: [ '<%=config.sources %>/**/*.js', 'index.js' ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        jshintrc: true
      }
    },

    jasmine_node: {
      options: {
        specNameMatcher: '.*Spec',
        jUnit: {
          report: true,
          savePath : 'tmp/reports/jasmine',
          useDotNotation: true,
          consolidate: true
        }
      },
      all: [ 'test/spec/' ]
    },

    release: {
      options: {
        tagName: 'v<%= version %>',
        commitMessage: 'chore(project): release v<%= version %>',
        tagMessage: 'chore(project): tag v<%= version %>'
      }
    },

    watch: {
      jasmine_node: {
        files: [ '<%= config.sources %>/**/*.js', '<%= config.tests %>/spec/**/*.js' ],
        tasks: [ 'jasmine_node' ]
      }
    },

    jsdoc: {
      dist: {
        src: [ '<%= config.sources %>/**/*.js', 'index.js' ],
        options: {
          destination: 'docs/api',
          plugins: [ 'plugins/markdown' ]
        }
      }
    }
  });

  // tasks

  grunt.registerTask('test', [ 'jasmine_node' ]);

  grunt.registerTask('auto-test', [ 'jasmine_node', 'watch:jasmine_node' ]);

  grunt.registerTask('default', [ 'jshint', 'test', 'jsdoc' ]);
};