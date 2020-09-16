const path = require(`path`);
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const isProduction = process.env.NODE_ENV !== 'production';

const CONFIG = {
  indexHtmlTemplate: './src/index.html',
  indexTSX: './src/index.tsx',
  outputDir: './build',
  assetDir: './public',
  publicDir: 'https://mikhailkaryamin.github.io/959581-six-cities-3',
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
    PUBLIC_URL: CONFIG.publicDir,
  }),
];

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    path: resolve(CONFIG.outputDir),
    publicPath: CONFIG.publicDir,
  },
  mode: isProduction ? 'production' : 'development',
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
    publicPath: CONFIG.publicDir,
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
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
};
