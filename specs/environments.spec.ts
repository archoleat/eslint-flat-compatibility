import { describe, expect, test } from 'vitest';

import { environments } from '../src/methods/environments.ts';

describe('ESLint Flat Config', () => {
  test('environments', () => {
    expect(
      environments({
        es2020: true,
        node: true,
      }),
    ).not.equal('');
  });
});
