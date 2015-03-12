module.exports = function(grunt) {
	// load less contrib task package
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// configuration for less task
		less: {
			development: {
				files: {
					'public/stylesheets/grayscale.css': 'public/stylesheets/grayscale.less',
					'public/stylesheets/mixins.css': 'public/stylesheets/mixins.less',
					'public/stylesheets/variables.css': 'public/stylesheets/variables.less',
					'public/stylesheets/style.css': 'public/stylesheets/style.less'
				}
			}
		}
	});
};