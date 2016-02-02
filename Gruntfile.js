module.exports = function(grunt){
    grunt.initConfig({
    	sass: {
    		dev: {
    			options: {
    				outputStyle: 'expanded',
                    sourcemap: true
    			},
    			files: {
    				'static/css/main.css': 'styles/main.scss' 
    			}
    		} 
    	},
    	watch: {
    		sass: {
    			files: ['styles/**/*.scss'],
    			tasks: ['sass:dev'],
    			options: {
    				livereload: true
    			}
    		},
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['watch']);
};