import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };

const plugins = [
  resolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  terser(),
];

export default [
  {
    input: ['index.mjs'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: 'inline',
        exports: 'named',
      },
    ],
    plugins: [
      ...plugins,
    ],
    external: [],
  },
  {
    input: ['index.mjs'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: 'inline',
        exports: 'named',
      },
    ],
    plugins: [
      ...plugins,
    ],
    external: [],
  },
];