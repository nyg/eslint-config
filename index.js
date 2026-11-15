import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { globalIgnores } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { typescriptRules, unusedVariablesOptions } from './typescript-rules.js'

export const base = [
   globalIgnores(['**/dist/**', '**/coverage/**'], 'nyg/ignores'),
   { name: 'nyg/javascript', ...js.configs.recommended },
   {
      name: 'nyg/base',
      files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
      languageOptions: {
         globals: { ...globals.browser, ...globals.node },
         parserOptions: { ecmaFeatures: { jsx: true } },
      },
      plugins: {
         '@stylistic': stylistic,
         'simple-import-sort': simpleImportSort,
      },
      rules: {
         '@stylistic/brace-style': ['error', '1tbs'],
         '@stylistic/indent': ['error', 3, { SwitchCase: 1 }],
         '@stylistic/member-delimiter-style': ['error', {
            multiline: { delimiter: 'none' },
            singleline: { delimiter: 'comma' },
         }],
         '@stylistic/no-trailing-spaces': 'error',
         '@stylistic/quotes': ['error', 'single'],
         '@stylistic/semi': ['error', 'never'],
         curly: ['error', 'all'],
         eqeqeq: ['error', 'always', { null: 'ignore' }],
         'no-unused-vars': ['error', unusedVariablesOptions],
         'no-var': 'error',
         'prefer-const': 'error',
         'simple-import-sort/exports': 'error',
         'simple-import-sort/imports': 'error',
      },
   },
]

export const typescript = [
   ...tseslint.configs.recommended,
   typescriptRules,
]

export const react = [
   { name: 'nyg/react-hooks', ...reactHooks.configs.flat.recommended },
   {
      name: 'nyg/react-refresh',
      plugins: { 'react-refresh': reactRefresh },
      rules: {
         'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
   },
]

export default { base, typescript, react }
