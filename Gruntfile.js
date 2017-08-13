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
        },
        prod: {
            files: [{
                expand : true,
                dot    : false,
                cwd    : '<%= config.path.app.root %>',
                dest   : '<%= config.path.dist.root %>',
                src    : [ '*.html', 'images/{,*/}*.*', 'fonts/{,*/}*.*', 'js/{,*/}*.*', 'libraries/{,*/}*.*' ]
            }]
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
          cwd: '<%= config.path.app.root %>/css',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.path.dist.root %>/css',
        }]
      }
    },
    watch: {
      less: {
        files: ['<%= config.path.app.root %>/less/*'],
        tasks: ['less']
      },
      prod: {
        files: ['<%= config.path.app.root %>**/*'],
        tasks: ['copy:prod']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['copy', 'less', 'watch:less', 'watch:prod', 'cssmin']);

};
