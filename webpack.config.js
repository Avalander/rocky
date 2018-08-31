const path = require('path')


module.exports = env => require(`./webpack/${env}`)({
	base_dir: path.resolve(__dirname),
	folders: {
		web: path.resolve(__dirname, 'web'),
		app: path.resolve(__dirname, 'web', 'app'),
		shared: path.resolve(__dirname, 'shared'),
		dist: path.resolve(__dirname, 'dist'),
		scss: path.resolve(__dirname, 'web', 'scss'),
	},
})