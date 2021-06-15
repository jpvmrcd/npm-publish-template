const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    clean: true,
    filename: 'publshtest.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'publshtest',
      type: 'umd',
    },
  },
  target: 'es5',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: './dist',
  },
  mode: 'production',
};
