var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
	test: [/\.js$/,/\.es6$/],
	exclude: /node_modules/, // exclude any and all files in the node_modules folder
	use: {
		loader:WebpackStrip.loader('console.log', 'perfLog')
	}
}

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;

