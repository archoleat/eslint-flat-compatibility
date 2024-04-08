import { describe, expect, test as spec } from 'vitest';

import { plugins } from '../src/methods/plugins.ts';

describe('ESLint Flat Config', () => {
  spec('plugins', () => {
    expect(plugins('unicorn')).not.equal('');
  });
});
