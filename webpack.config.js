const path = require('path')

module.exports = {
  "entry": "./src/main.js",
  "output": {
    "path": path.resolve("./"),
    "library": "eem",
    "filename": "eem.js",
    "libraryTarget": "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
