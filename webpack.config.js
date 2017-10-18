const path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve("./"),
    library: "eem",
    filename: "eem.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader" }
    ]
  }
}
