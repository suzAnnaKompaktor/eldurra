module.exports = function(grunt) {

  grunt.initConfig({
    // Project settings
    pkg: grunt.file.readJSON( 'package.json' ),
    config: {
        path: {
            app: {
                root: 'src/app'
            },
            src: {
                root: 'src'
            },
            bower: {
                root: 'src/bower_components/'
            },
            dist: {
                root: 'dist'
            }
        }
    },
    copy: {
        jquery: {
            files: [
                {
                    src: '<%= config.path.bower.root %>/jquery/dist/jquery.js',
                    dest: '<%= config.path.app.root %>/libraries/jquery/jquery.js'
                }
            ]
        },
        bootstrap: {
            files: [
                {
                    src: '<%= config.path.bower.root %>/bootstrap/dist/bootstrap.js',
                    dest: '<%= config.path.app.root %>/libraries/bootstrap/bootstrap.js'
                }
            ]
        }
    },
    less: {
      dev: {
        src: '<%= config.path.app.root %>/less/styles.less',
        dest: '<%= config.path.app.root %>/css/styles.css',
        options: {
          compress: true
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      less: {
        files: ['<%= config.path.app.root %>/less/*'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['copy', 'less', 'watch']);

};
