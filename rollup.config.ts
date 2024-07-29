import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const indexFile = 'src/index.ts';
const features = 'src/features';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#compatibility',
            replacement: `src/shared/compatibility.ts`,
          },
          {
            find: '#config',
            replacement: `${features}/config.ts`,
          },
          {
            find: '#environments',
            replacement: `${features}/environments.ts`,
          },
          {
            find: '#extends',
            replacement: `${features}/extends.ts`,
          },
          {
            find: '#plugins',
            replacement: `${features}/plugins.ts`,
          },
        ],
      }),
      dts(),
    ],
    input: indexFile,
    output: {
      file: 'index.d.ts',
    },
  },
]);
