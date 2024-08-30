import { describe, expectTypeOf, test as spec } from 'vitest';

import { Environments } from 'eslint-define-config';

import { environments } from '#features/environments.ts';

describe('ESLint Flat Config', () => {
  spec('environments', async () => {
    // @ts-ignore
    expectTypeOf(environments({})).toEqualTypeOf<Environments>();
  });

  spec('environments', async () => {
    expectTypeOf(
      environments({
        es2020: true,
        node: true,
      }),
      // @ts-ignore
    ).toEqualTypeOf<Environments>();
  });
});
