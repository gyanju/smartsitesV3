const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
	entry: ['./src/vendors/jquery/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js','./src/vendors/match-height/jquery.matchHeight.js','./src/js/main.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './src/js/')
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
					//mangle: { except: ['main.js'] },
					mangle: false,
					keep_fnames: true,
					keep_classnames: true,
					extractComments: true,
				}
			}),
		],
	},
	externals: {
		"jquery": "jQuery"
	},
	watch: true
};