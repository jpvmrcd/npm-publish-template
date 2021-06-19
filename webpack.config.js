const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    clean: true,
    filename: 'publishtest.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'publishtest',
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
    alias: {
      '@jpvmrcd/publish-test': path.resolve(__dirname, 'dist'),
    },
  },
  devServer: {
    contentBase: './dist',
  },
  mode: 'production',
};
