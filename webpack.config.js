const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const name = 'lightgallery';
const path = require('path');
const dist = path.resolve(__dirname, name);

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app/initialize.js',
  output: {
    filename: 'js/plugin.js',
    path: dist,
    publicPath: 'storage/plugins/' + name + '/'
  },
  externals: {
    'jquery': 'window.jQuery'
  },
  plugins: [
    new CleanWebpackPlugin([dist + '/*']),
    new CopyWebpackPlugin([ {
      from: './app/assets',
      to: dist,
      type: 'dir'
    } ], {})
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /(lg\.svg|\.(woff|woff2|eot|ttf|otf))$/,
        use: [
          'file-loader?name=/fonts/[name].[ext]'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=/img/[name].[ext]'
        ]
      }
    ]
  },
  watch: true
};
