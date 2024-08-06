import { describe, expectTypeOf, test as spec } from 'vitest';

import { Environments } from 'eslint-define-config';

import { env } from '#features';

describe('ESLint Flat Config', () => {
  spec('environments', async () => {
    expectTypeOf(env({})).toEqualTypeOf<Environments>();
  });

  spec('environments', async () => {
    expectTypeOf(
      env({
        es2020: true,
        node: true,
      }),
    ).toEqualTypeOf<Environments>();
  });
});
