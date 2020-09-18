const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const isProduction = !process.env.WEBPACK_DEV_SERVER;

const CONFIG = {
  indexHtmlTemplate: './public/index.html',
  indexTSX: './src/index.tsx',
  outputDir: './build',
  assetDir: './public',
  publicDirProduct: '/959581-six-cities-3',
  publicDirDevServer: '/',
  devServerPort: 8000,
};

function resolve(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.join(__dirname, filePath);
}

const commonPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve(CONFIG.indexHtmlTemplate),
  }),
  new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
    PUBLIC_URL: isProduction ? CONFIG.publicDirProduct : '',
  }),
];

module.exports = {
  entry: './src/index.tsx',
  mode: isProduction ? 'production' : 'development',
  output: {
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    path: resolve(CONFIG.outputDir),
    publicPath: isProduction ? CONFIG.publicDirProduct : CONFIG.publicDirDevServer,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: isProduction
    ? commonPlugins.concat([
      new CopyWebpackPlugin({
        patterns: [{
          from: resolve(CONFIG.assetDir),
          to: resolve(CONFIG.outputDir),
        }],
      }),
    ])
    : commonPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]),
  devServer: {
    contentBase: resolve(CONFIG.assetDir),
    historyApiFallback: {
      index: '/',
    },
    publicPath: CONFIG.publicDirDevServer,
    port: CONFIG.devServerPort,
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
};
