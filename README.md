# ESLint Flat Compatibility

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Feslint-flat-compatibility)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Feslint-flat-compatibility)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/codeql.yaml?label=CodeQL)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```shell
bun i -D @archoleat/eslint-flat-compatibility
```

## Usage

### Before

```js
import { fileURLToPath } from 'url';
import path from 'path';

import { defineFlatConfig } from 'eslint-define-config';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default defineFlatConfig([
  ...compat.extends(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
// ...
```

### After

```js
import { config, env, extend, plugins } from '@archoleat/eslint-flat-compatibility';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  // Mimic extends
  ...extend(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),

  // Mimic env
  ...env({
    es2020: true,
    node: true,
  }),

  // Mimic plugins
  ...plugins('airbnb', 'react'),

  // Translate an entire config
  ...config({
    env: {
      es2020: true,
      node: true,
    },
    extends: ['airbnb/base'],
    plugins: ['airbnb', 'unicorn'],
    rules: {
      semi: 'error',
    },
  }),
]);
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
