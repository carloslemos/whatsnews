'use strict';

module.exports = function (grunt) {
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	// Show elapsed time at the end
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 9000,
					livereload: true
				}
			}
		},
		
		watch: {
			options: {
				livereload: true
			},
			less:{
				files:["sde/dados/templates/less/**/*.less"],
				tasks:["less"]
			},
			
			target: {
				files: [
					'*.html',
					'sde/static/estatisticas/css/**/*.css'
					// 'js/**/*.js'
				]
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-less');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// Default task.
	grunt.registerTask('default', ['connect', 'watch']);
};