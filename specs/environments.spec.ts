import { describe, expect, test as spec } from 'vitest';

import { env } from '#features';

describe('ESLint Flat Config', () => {
  spec('environments', () => {
    expect(
      env({
        es2020: true,
        node: true,
      }),
    ).not.equal('');
  });
});
