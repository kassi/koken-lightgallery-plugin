const name = 'lightgallery';
const path = require('path');
const dist = path.resolve(__dirname, name);

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app/initialize.js',
  output: {
    filename: 'js/plugin.js',
    path: dist
  },
  watch: true
};
