const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: [path.resolve(__dirname, './node_modules')]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, './assets/css/color.less')
            }
          }
        ],
        exclude: [path.resolve(__dirname, './node_modules')]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.json', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true // 解决BrowserRouter刷新404的问题
  }
}
