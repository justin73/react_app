// since browser can't interperate jsx and react syntax, so we need webpack to compile everything together to create a js file
module.exports = {
	//client js file
	entry: "./app-client.js",
	output:{
		filename:"public/bundle.js"
	},
	module:{
		loaders:[
			{
				exclude:/(node_modules|app-server.js)/,
				loader:"babel",
				query:
					{
						presets:['es2016','react']
					}
			}
		]
	}
};