import { describe, expect, test as spec } from 'vitest';

import { plugins } from '#plugins';

describe('ESLint Flat Config', () => {
  spec('plugins', () => {
    expect(plugins('unicorn')).not.equal('');
  });
});
