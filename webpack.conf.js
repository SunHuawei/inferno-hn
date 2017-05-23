const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '/',
		filename: 'bundle.[hash].js',
		publicPath: 'http://localhost:8080/'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'public/index.html',
            template: 'src/index.html'
        })
	]
};
