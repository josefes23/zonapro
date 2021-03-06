var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: {
		'homeForSales': "./src/Components/HomesForSale/index.tsx"
	},
	output: {
		filename: '[name].js',
		path: __dirname + "/public/dist"
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{
				test: /\.css$/,
				// include: path.join(__dirname, 'src/components'),
				use: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.WatchIgnorePlugin([
			/css\.d\.ts$/
		])],
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/](i18next|i18next-xhr-backend|react-i18next|react-loading-skeleton)[\\/]/,
					name: 'core.common',
					chunks: 'initial'
				}
			}
		}
	}
};
