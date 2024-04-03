# Archoleat Repo Template

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Feslint-flat-compatibility)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Feslint-flat-compatibility)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/codeql.yaml?label=CodeQL)
![Test](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/test.yaml?label=Test)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/eslint.yaml?label=ESLint)
![Markdown](https://img.shields.io/github/actions/workflow/status/archoleat/eslint-flat-compatibility/markdown.yaml?label=Markdown)
![ESM Only](https://img.shields.io/badge/ESM-only-gray?labelColor=fe0)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

```shell
# pnpm
pnpm i -D @archoleat/eslint-flat-compatibility
```

```shell
# npm
npm i -D @archoleat/eslint-flat-compatibility
```

```shell
# yarn
yarn add -D @archoleat/eslint-flat-compatibility
```

## Usage

### Before

```js
import { resolve } from 'node:path';

import { defineFlatConfig } from 'eslint-define-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: resolve(),
  resolvePluginsRelativeTo: resolve(),
});

export default defineFlatConfig([
  ...compat.extends(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
// ...
```

or

```js
import { path } from 'node:path';
import { fileURLToPath } from 'url';

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

## After

```js
import { extend } from '@archoleat/eslint-flat-compatibility';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  // mimic extends
  ...extend(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
// ...
```

Also available:

```js
import { config, env, extend, plugins } from '@archoleat/eslint-flat-compatibility';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  // mimic extends
  ...extend(
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),

  // mimic env
  ...env({
      es2020: true,
      node: true
  }),

  // mimic plugins
  ...plugins('airbnb', 'react'),

  // translate an entire config
  ...config({
    extends: ['airbnb/base'],
    plugins: ['airbnb', 'unicorn'],
    env: {
      es2020: true,
      node: true
    },
    rules: {
      semi: 'error'
    }
  }),
]);
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
