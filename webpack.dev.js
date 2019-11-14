var path = require('path');
var common = require('./webpack.common');
var _ = require('lodash');

module.exports = _.merge(common, {
	mode: "development",
	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	plugins: [
		// new CleanWebpackPlugin(),
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 500
	}
});
