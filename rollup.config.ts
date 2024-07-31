import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const fileName = 'index';
const indexFile = `${sourceFolder}/${fileName}.ts`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#features',
            replacement: `${sourceFolder}/features/${indexFile}`,
          },
          {
            find: '#shared',
            replacement: `${sourceFolder}/shared/${indexFile}`,
          },
        ],
      }),
      dts(),
    ],
    input: indexFile,
    output: {
      file: `${fileName}.d.ts`,
    },
  },
]);
