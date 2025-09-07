import { describe, expectTypeOf, test as spec } from 'vitest';
import type { Override } from 'eslint-define-config';

import { config } from '#index';

describe('ESLint Flat Config', async () => {
  spec('should return empty config', async () => {
    // @ts-ignore
    expectTypeOf(config({})).toEqualTypeOf<Override>();
  });

  spec('should return config', async () => {
    expectTypeOf(
      // @ts-ignore
      config({
        extends: ['airbnb-typescript/base'],
        plugins: ['unicorn'],
        env: {
          'shared-node-browser': true,
          amd: true,
          applescript: true,
          atomtest: true,
          commonjs: true,
          embertest: true,
          es2016: true,
          es2017: true,
          es2018: true,
          es2019: true,
          es2020: true,
          es2021: true,
          es2022: true,
          es2023: true,
          es6: true,
          greasemonkey: true,
          jasmine: true,
          jest: true,
          jquery: true,
          meteor: true,
          mocha: true,
          mongo: true,
          nashorn: true,
          node: true,
          phantomjs: true,
          prototypejs: true,
          protractor: true,
          qunit: true,
          serviceworker: true,
          shelljs: true,
          webextensions: true,
          worker: true,
        },
        rules: {
          semi: 'error',
        },
      }),
    ).toEqualTypeOf<Override>();
  });
});
