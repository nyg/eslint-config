# eslint-config

My ESLint presets.

## Install

```sh
pnpm add -D eslint github:nyg/eslint-config#v1.0.0
```

The plugins come with the package: a project needs only `eslint` and this package. Next.js projects also keep `eslint-config-next`.

## Presets

| Preset | From | Content |
|---|---|---|
| `base` | `@nyg/eslint-config` | `@eslint/js` recommended, formatting through `@stylistic` (3 spaces, no semicolons, single quotes, `1tbs` braces, no trailing spaces, no delimiter after interface members), sorted imports and exports, `curly`, `eqeqeq`, `no-var`, `prefer-const` |
| `typescript` | `@nyg/eslint-config` | `typescript-eslint` recommended, `consistent-type-imports` |
| `react` | `@nyg/eslint-config` | `eslint-plugin-react-hooks` recommended, `react-refresh/only-export-components` |
| `next` | `@nyg/eslint-config/next` | `eslint-config-next/core-web-vitals` |
| `nextWithTypescript` | `@nyg/eslint-config/next` | `next` plus `eslint-config-next/typescript` |

Unused variables, arguments and caught errors are allowed when their name starts with `_`.

## Usage

React and TypeScript:

```js
import { base, react, typescript } from '@nyg/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([base, typescript, react])
```

Next.js:

```js
import { base } from '@nyg/eslint-config'
import { next } from '@nyg/eslint-config/next'
import { defineConfig } from 'eslint/config'

export default defineConfig([base, next])
```

`next` and `nextWithTypescript` bring their own React and TypeScript plugins, so do not combine them with `react` or `typescript`.

## TypeScript 7

`typescript-eslint` does not load under TypeScript 7.0. This package depends on TypeScript 6 so that the `typescript` preset parses with it, whatever version the project compiles with. `eslint-config-next` resolves TypeScript from the project, so a Next.js project needs TypeScript 6 until `typescript-eslint` supports TypeScript 7.
