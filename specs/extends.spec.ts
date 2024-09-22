import { describe, expect, test as spec } from 'vitest';

import { extend } from '#index';

describe('ESLint Flat Config', async () => {
  spec('should return extends', async () => {
    expect(
      extend(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.toEqual(extend());
  });
});
