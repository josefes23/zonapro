var _ = require('lodash');
var common = require('./webpack.common');

module.exports = _.merge(common, {
	mode: "production",
	devtool: false,
	plugins: []
});
