import { resolve } from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';

const compatibility = (...extend: string[]) => {
  return new FlatCompat({
    baseDirectory: resolve(),
    resolvePluginsRelativeTo: resolve(),
  }).extends(...extend);
};

export { compatibility };
