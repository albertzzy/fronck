const path = require('path');

module.exports = {
	distDir: 'build',

	webpack: (config, { dev }) => {

		// console.log(config.module.rules[4]);
		// console.log(config);

		// config.module.rules[4].options.babelrc = true; 
		
		config.module.rules.push(/* {
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					}, 
					{
						loader: "css-loader",
						options:{
							importLoaders:1
						}
						
					}, 
					{
						loader:"postcss-loader",
						options:{
							config:{
								path:'../postcss.config.js'
							}
						}
					},
					{
						loader: "less-loader"

					}
					
				]
			}, */
			{
				test:/\.css$/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader'
					}/* ,
					{
						loader:"postcss-loader"
					} */
				]

			} 
			
			
			
			)

			console.log(config.module.rules);
    	return config
  	},

	webpackDevMiddleware: (config) => {

	    return config
	}


}