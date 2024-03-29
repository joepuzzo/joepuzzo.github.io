const path = require('path');

// The actual webpack configuration object
module.exports = {
  // Defines where webpack start to load
  entry: [
    // Path to the apps entrypoint
    path.resolve(__dirname, '../../src/index.js'),
  ],
  // Defines where webpack will output the bundled file
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../../'),
    publicPath: '/'
  },
  /**
   *
   * Loaders enable webpack to process more than just JavaScript files
   * (webpack itself only understands JavaScript). They give you the ability to
   * leverage webpack's bundling capabilities for all kinds of files by
   * converting them to valid modules that webpack can process.
   *
   * Essentially, webpack loaders transform all types of files into modules
   * that can be included in your application's dependency graph.
   */
  module: {
    rules: [
      // Uses babel to transpile JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Allows you to import scss files and also adds unique hash to avoid naming conflicts
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Allows you to import images and stuff
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)|\.jpg($|\?)|\.mp4($|\?)/,
        loader: 'url-loader',
      },

    ]
  }
};
