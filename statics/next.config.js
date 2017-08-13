const path = require('path');

module.exports = {
	distDir: 'build',

	webpack: (config, { dev }) => {
		config.resolve.alias = {
			COMP:path.resolve(__dirname,'components')
		}
		
		

    	return config
  	},

	webpackDevMiddleware: (config) => {

	    return config
	}


}