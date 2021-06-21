const path = require('path');
const { merge } = require('webpack-merge');

const base = {
  entry: './src/index.ts',
  output: {
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
  mode: 'production',
};

module.exports = [
  merge(base, {
    output: {
      clean: true,
      filename: 'publishtest.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
        name: 'publishtest',
        type: 'umd',
      },
    },
  }),
  merge(base, {
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, ''),
    },
    optimization: {
      minimize: false,
    },
  }),
];
