import { describe, expect, test } from 'vitest';

import { config } from '../src/methods/config.ts';

describe('ESLint Flat Config', () => {
  test('config', () => {
    expect(
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
    ).not.equal('');
  });
});
