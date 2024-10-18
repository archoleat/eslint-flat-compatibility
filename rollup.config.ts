import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';
import { resolve } from 'node:path';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const appFolder = `${sourceFolder}/app`;
const sharedFolder = `${sourceFolder}/shared`;
const fileFormat = 'es';
const fileName = 'index';
const declarationFile = `${fileName}.d.ts`;
const entryFile = `${fileName}.ts`;
const outputFile = `${fileName}.js`;
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
            find: '#app',
            replacement: resolve(`${appFolder}/${entryFile}`),
          },
          {
            find: '#shared',
            replacement: resolve(`${sharedFolder}/${entryFile}`),
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
