const path = require('path');

module.exports = {
	distDir: 'build',

	webpack: (config, { dev }) => {

		console.log(config.module);

		config.resolve.alias = {
			COMP:path.resolve(__dirname,'components')
		}
		
		config.module.rules.push({
            test: /\.less$/,
            use: [
			{
                loader: "style-loader" // creates style nodes from JS strings
			}, 
			{
				loader: "css-loader",
				options:{
					importLoaders:1
				}
				
			},
			{
                loader: "less-loader" // compiles Less to CSS
            }]
		},
		{
			test: /\.css$/,
            use: [
			{
                loader: "style-loader" // creates style nodes from JS strings
			}, 
			{
				loader: "css-loader"
			}
			]
		})

    	return config
  	},

	webpackDevMiddleware: (config) => {

	    return config
	}


}