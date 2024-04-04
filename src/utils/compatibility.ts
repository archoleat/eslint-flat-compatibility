import path from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';

const resolve = path.resolve();
const compatibility = new FlatCompat({
  baseDirectory: resolve,
  resolvePluginsRelativeTo: resolve,
});

export { compatibility };
