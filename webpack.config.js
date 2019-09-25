// Warning: only used for jetbrains ide, do not edit

module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.vue', '.jsx'],
		alias: {
			'~': __dirname,
			'~~': __dirname,
			'@': __dirname,
			'@@': __dirname,
			'assets': `${__dirname}/assets`,
			'static': `${__dirname}/static`,
		},
		modules: [
			'node_modules',
			`${__dirname}/node_modules`,
			`${__dirname}/node_modules/nuxt/node_modules`
		]
	},
	resolveLoader: {
		modules: [
			'node_modules',
			`${__dirname}/node_modules`,
			`${__dirname}/node_modules/nuxt/node_modules`
		]}
};