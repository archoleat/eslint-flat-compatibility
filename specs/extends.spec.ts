import { describe, expect, test as spec } from 'vitest';

import { extend } from '#features/extends.ts';

describe('ESLint Flat Config', () => {
  spec('extends', async () => {
    expect(
      extend(
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ),
    ).not.equal('');
  });
});
