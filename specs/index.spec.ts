import { describe, expect, test } from 'vitest';

import { compatibility } from '../index.ts';

describe('ESLint Flat Config', () => {
  test('compatibility', () => {
    expect(
      compatibility(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.equal('');
  });
});
