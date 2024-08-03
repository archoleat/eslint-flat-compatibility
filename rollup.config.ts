import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const fileName = 'index';
const indexFile = `${fileName}.ts`;

export default defineConfig([
  {
    external: ['@eslint/eslintrc', 'node:path'],
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
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
            replacement: resolve(`${sourceFolder}/features/${indexFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sourceFolder}/shared/${indexFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: `${fileName}.d.ts`,
    },
  },
]);
