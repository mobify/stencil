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
                    'iOS >= 6.0',
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
                    var cmd = [
                        'casperjs test test-suite.js',
                        '--pre=_pre-roll.js --post=_post-roll.js',
                        '--log-level=info'
                    ];

                    if (scope) {
                        cmd.push('--scope=' + scope);
                    }

                    if (verbosity !== 'terse') {
                        cmd.push('--verbose');
                    }

                    return cmd.join(' ');
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

            grunt.task.run(['sass', 'autoprefixer', task]);
    });
};
