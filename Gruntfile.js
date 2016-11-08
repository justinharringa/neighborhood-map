'use strict';

var ngrok = require('ngrok');

module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_US",
                threshold: 40
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            }
        },
        'http-server': {
            'dev': {
                // the server root directory
                root: "dist",

                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 8080,

                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "0.0.0.0",

                cache: "300",
                showDir: true,
                autoIndex: true,

                // server default file extension
                ext: "html"
            }
        },
        copy: {
            js: {
                expand: true,
                cwd: './node_modules',
                dest: './src/js/libs/',
                flatten: true,
                filter: 'isFile',
                src: [
                    './knockout/build/output/knockout-latest.js'
                ]
            },
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'dist/'}
                ]
            }
        },
        clean: ['dist'],
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: ['**/*.{html,htm}'],
                    cwd: 'dist/',
                    dest: 'dist/'
                }]
            }
        },
        jshint: {
            all: ['src/js/*.js', 'test/**/*.js']
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**/*.css'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/'
                }]
            }
        },
        // Using grunt-karma: https://github.com/karma-runner/grunt-karma
        // Using karma-jasmine: https://github.com/karma-runner/karma-jasmine
        karma: {
            unit: {
                options: {
                    browsers: ['Chrome'],
                    files: ['src/js/**/*.js', 'test/**/*.js'],
                    frameworks: ['jasmine'],
                    singleRun: true
                }
            }
        }
    });

    // Register customer task for ngrok
    grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function () {
        var done = this.async();
        var port = 9292;

        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    // Register default tasks
    grunt.registerTask('default',
        ['clean',
            'copy',
            'htmlmin',
            'cssmin',
            'uglify',
            'jshint']);
};