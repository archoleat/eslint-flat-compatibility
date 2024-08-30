import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';

const fileFormat = 'es';
const entryFileName = 'app';
const outputFileName = 'index';

const compatibilityFile = `${sourceFolder}/shared/compatibility.ts`;
const declarationFile = `${outputFileName}.d.ts`;
const entryFile = `${entryFileName}.ts`;
const outputFile = `${outputFileName}.js`;

const externalDependencies = ['@eslint/eslintrc', 'node:path'];

export default defineConfig([
  {
    external: externalDependencies,
    plugins: [typescript(), minify()],
    input: `${sourceFolder}/${entryFile}`,
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
            find: '#compatibility',
            replacement: resolve(compatibilityFile),
          },
        ],
      }),
      dts(),
    ],
    input: `${sourceFolder}/${entryFile}`,
    output: {
      file: declarationFile,
      format: fileFormat,
    },
  },
]);
