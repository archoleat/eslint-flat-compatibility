import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const featuresFolder = `${sourceFolder}/features`;
const sharedFolder = `${sourceFolder}/shared`;

const fileName = 'index';
const fileFormat = 'es';

const indexFile = `${fileName}.ts`;
const declarationFile = `${fileName}.d.ts`;
const outputFile = `${fileName}.js`;

const externalDependencies = ['@eslint/eslintrc', 'node:path'];

export default defineConfig([
  {
    external: externalDependencies,
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: outputFile,
      format: fileFormat,
    },
  },
  {
    external: externalDependencies,
    plugins: [
      alias({
        entries: [
          {
            find: '#features',
            replacement: resolve(`${featuresFolder}/${indexFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sharedFolder}/${indexFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${indexFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
