const path = require('path')

module.exports = {
	entry: './app/app.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
		  {
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env']
			  }
			}
		  }
		]
	  },
	watch: true,
	mode: 'production',
}