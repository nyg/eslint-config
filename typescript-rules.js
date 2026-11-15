export const unusedVariablesOptions = {
   argsIgnorePattern: '^_',
   varsIgnorePattern: '^_',
   caughtErrorsIgnorePattern: '^_',
}

export const typescriptRules = {
   name: 'nyg/typescript',
   files: ['**/*.{ts,tsx,mts,cts}'],
   rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', unusedVariablesOptions],
   },
}
