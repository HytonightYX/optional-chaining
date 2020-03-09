const path = require('path')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  entry: {
    index: resolve('../src/index.js')
  },
  output: {
    path: resolve('../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: resolve('../loader/optional-chain.js')
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      }
    ]
  }
}