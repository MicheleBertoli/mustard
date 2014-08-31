
module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            html: {
                files: [
                    '*.html'
                ],
                options: {
                    livereload: true,
                }
            },
            less: {
                files: [
                    'less/*.less'
                ],
                tasks: [
                    'less:style'
                ],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'javascripts/*.js',
                    'gruntfile.js'
                ],
                tasks: [
                    'jshint'
                ],
                options: {
                    livereload: true,
                }
            }
        },
        less: {
            style: {
                files: {
                    'stylesheets/style.css': 'less/style.less'
                }
            }
        },
        jshint: {
            js: [
                '*.js'
            ],
            options: {
                jshintrc: ".jshintrc",
            }
        },
        inline: {
            build: {
                src: [
                    'index.html'
                ],
                dest: [
                    'build/'
                ]
            }
        },
        htmlmin: {
            build: {
                files: {
                    'build/index.html': 'build/index.html'
                },
                options: {                                 
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    minifyJS: true,
                    minifyCSS: true
                }
            }
        },
        clean: {
            build: 'build'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'inline',
        'htmlmin'
    ]);
    
};