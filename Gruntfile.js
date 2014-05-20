module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        options: {
            style: 'expanded',
            loadPath: [
                './'
            ]
        },
        compile_tests: {
            files: [{
                expand: true,
                src: 'tests/**/*.scss',
                dest: '.',
                ext: '.css'
            }]
        }
    },

    autoprefixer: {
        options: {
            browsers: [
                'last 3 iOS versions',
                'Android 2.3',
                'Android 4',
                'last 2 Chrome versions'
            ]
        },
        prefix_tests: {
            files: [{
                expand: true,
                src: 'tests/**/*.css' // overwrite compiled css
            }]
        },
    },

    watch: {
        scss: {
            files: [
                'dist/**/*.scss',
                'tests/**/*.scss'
            ],
            tasks: ['default']
        }
    },

    shell: {
        phantomcss: {
            command: 'casperjs test test-suite.js',
            options: {
                execOptions: {
                    cwd: 'tests/regression'
                }
            }
        }
    }
  });

  // Default task
  grunt.registerTask('default', ['sass', 'autoprefixer']);
  grunt.registerTask('test', ['shell:phantomcss']);
};
