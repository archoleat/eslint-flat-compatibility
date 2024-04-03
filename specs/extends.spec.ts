import { describe, expect, test } from 'vitest';

import { extend } from '../src/methods/extends.ts';

describe('ESLint Flat Config', () => {
  test('extends', () => {
    expect(
      extend(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.equal('');
  });
});
