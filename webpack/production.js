const webpack = require('webpack')
const merge = require('webpack-merge')

const MiniCssPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const common = require('./common')
const { version } = require('../package.json')


module.exports = ({ base_dir, folders }) => merge(common({ base_dir, folders }), {
	mode: 'production',
	module: {
		rules: [{
			test: /\.scss/,
			use: [
				MiniCssPlugin.loader,
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						includePaths: [ folders.web ]
					}
				}
			],
		}]
	},
	plugins: [
		new MiniCssPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
		}),
		new OptimiseCssAssetsPlugin(),
		new webpack.DefinePlugin({
			$VERSION$: JSON.stringify(version),
		}),
	],
})