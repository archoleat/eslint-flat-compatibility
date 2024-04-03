import { describe, expect, test } from 'vitest';

import { plugins } from '../src/methods/plugins.ts';

describe('ESLint Flat Config', () => {
  test('plugins', () => {
    expect(plugins('unicorn')).not.equal('');
  });
});
