import { resolve } from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';

/** ESLint Flat Config compatibility constructor */
const compatibility = new FlatCompat({
  baseDirectory: resolve(),
  resolvePluginsRelativeTo: resolve(),
});

export { compatibility };
