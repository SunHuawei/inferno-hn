const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ExtractCSSPlugin = new ExtractTextPlugin({
  filename: 'bundle.[name].[chunkhash].css',
  allChunks: true // This is not ideal. However, Extract-Text doesn't support extractng the per bundle css.
});

const CSS_LOADER_OPTIONS = {
  modules: true,
  localIdentName: '[hash:base64:8]',
  minimize: true,
  camelCase: false,
  importLoaders: 1
};

const POSTCSS_LOADER_OPTIONS = {
    plugins: function() {
      return [
        autoprefixer({
          browsers: "last 3 versions"
        })
      ];
    }
};


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
		}, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractCSSPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: CSS_LOADER_OPTIONS },
                { loader: 'postcss-loader', options: POSTCSS_LOADER_OPTIONS }
              ]
            })
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
        ExtractCSSPlugin,
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'public/index.html',
            template: 'src/index.html'
        })
	]
};
