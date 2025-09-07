import { describe, expect, test as spec } from 'vitest';

import { plugins } from '#index';

describe('ESLint Flat Config', async () => {
  spec('should return plugins', async () => {
    expect(plugins('unicorn')).not.toEqual(plugins());
  });
});
