import { describe, expect, test as spec } from 'vitest';

import { config } from '#config';

describe('ESLint Flat Config', () => {
  spec('config', () => {
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
