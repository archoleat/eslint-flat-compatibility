import { describe, expect, test as spec } from 'vitest';

import { environments } from '#environments';

describe('ESLint Flat Config', () => {
  spec('environments', () => {
    expect(
      environments({
        es2020: true,
        node: true,
      }),
    ).not.equal('');
  });
});
