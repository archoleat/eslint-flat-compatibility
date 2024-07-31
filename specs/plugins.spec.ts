import { describe, expect, test as spec } from 'vitest';

import { plugins } from '#features';

describe('ESLint Flat Config', () => {
  spec('plugins', async () => {
    expect(plugins('unicorn')).not.equal('');
  });
});
