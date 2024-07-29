import { describe, expect, test as spec } from 'vitest';

import { extend } from '#extends';

describe('ESLint Flat Config', () => {
  spec('extends', () => {
    expect(
      extend(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.equal('');
  });
});
