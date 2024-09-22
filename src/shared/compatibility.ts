import { resolve } from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';

const compatibility = new FlatCompat({
  baseDirectory: resolve(),
  resolvePluginsRelativeTo: resolve(),
});

export { compatibility };
