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
                    src: 'tests/**/*.css' // Overwrite compiled css.
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
            test: {
                command: function(scope, verbosity) {
                    var command;

                    scope = scope ? '--scope=' + scope : '';
                    verbosity = (verbosity === 'terse') ? '' : '--verbose';
                    command = 'casperjs test ' + scope + ' --log-level=info ' + verbosity + ' test-suite.js';

                    return command;
                },
                options: {
                    // Prevent phantomcss raising a grunt error on first run.
                    failOnError: false,
                    execOptions: {
                        cwd: 'tests/regression'
                    }
                }
            }
        }
    });

    // Default task

    grunt.registerTask('default', ['sass', 'autoprefixer']);

    // Run all tests or only one. Examples:
    //
    // $ `grunt test` // run all tests.
    // $ `grunt test:all` // ditto
    // $ `grunt test:all:terse` // prevent verbose output
    // $ `grunt test:components/arrange` // only test the arrange component
    // $ `grunt test:utils/layout:terse` // only test layout utils (terse mode)

    grunt.registerTask('test', function(scope, verbosity) {
        var task = 'shell:test';

        task = scope ? (task + ':' + scope) : task;
        task = verbosity ? (task + ':' + verbosity) : task;

        grunt.task.run(task);
    });
};
