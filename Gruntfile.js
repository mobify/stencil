module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        options: {
            style: 'expanded'
        },
        compile_tests: {
            files: [{
                expand: true,
                src: 'test/**/*.scss',
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
                src: 'test/**/*.css' // overwrite compiled css
            }]
        },
    },

    watch: {
        scss: {
            files: ['dist/**/*.scss'],
            tasks: ['default']
        }
    }
  });

  // Default task
  grunt.registerTask('default', ['sass', 'autoprefixer']);
};
