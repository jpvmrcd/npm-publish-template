import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [{
    file: 'dist/npm-publish-template.min.js',
    format: 'iife',
    name: 'npmpublishtemplate',
    plugins: [terser()],
  }],
};
