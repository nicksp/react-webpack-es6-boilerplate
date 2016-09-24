// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../build/client'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, '../src/client/scripts'),
      path.join(__dirname, '../src/client/assets'),
      path.join(__dirname, '../src/client/assets/javascripts'),
      'node_modules'
    ],
    alias: {
      models: path.join(__dirname, '../src/client/assets/javascripts/models')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'  // fetch API
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
      // JavaScript / ES6
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src/client/assets/javascripts'),
        loader: 'babel'
      },
      // Images
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ];
  }
};
