import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [{
    file: 'dist/publishtest.min.js',
    format: 'iife',
    name: 'publishtest',
    plugins: [terser()],
  }],
};
