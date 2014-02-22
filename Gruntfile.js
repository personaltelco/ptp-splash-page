module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            jshintrc: '.jshintrc',
            all: ['Gruntfile.js', '*.js', 'lib/*.js', 'src/*.js']
		},
        uglify: {
			options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd hh:MM") %> */\n',
                mangle: false,
                compress: true,
                beautify: false
			},
			build: {
				src: [
				  'src/bower_components/jquery/jquery.min.js',
                  'src/custom_bootstrap/js/bootstrap.min.js',
                  'src/*.js'
                  ],
                dest: 'htdocs/js/<%= pkg.name %>.min.js'
			}
        },
        exec: {
            ssh_publish: {
                cmd: "scp -r htdocs/* grankremote:/www/"
            }
        },
	  
        watch: {
            scripts: {
                files: ['src/*.js', 
		            'src/dustjs/*.html', 
		            'htdocs/js/loader.js', 
		            'htdocs/css/*.css', 
		            'htdocs/*.html'
		        ],
		        options: {
		            spawn: false,
		            livereload: true,
		        },
            },
		},
	});

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.loadNpmTasks('grunt-exec');
      
    grunt.loadNpmTasks('grunt-contrib-watch');
      
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};