import { describe, expect, test } from 'vitest';

import { compatibility } from '../index.ts';

describe('ESLint flat compatibility', () => {
  test('function', () => {
    expect(
      compatibility(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.equal('');
  });
});
