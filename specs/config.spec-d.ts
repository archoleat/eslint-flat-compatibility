import { describe, expectTypeOf, test as spec } from 'vitest';

import { Override } from 'eslint-define-config';

import { config } from '#features';

describe('ESLint Flat Config', () => {
  spec('empty config', async () => {
    expectTypeOf(config({})).toEqualTypeOf<Override>();
  });

  spec('config', async () => {
    expectTypeOf(
      config({
        extends: ['airbnb-typescript/base'],
        plugins: ['unicorn'],
        env: {
          es2020: true,
          node: true,
        },
        rules: {
          semi: 'error',
        },
      }),
    ).toEqualTypeOf<Override>();
  });
});
