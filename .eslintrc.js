module.exports = {
  root: true,
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  rules: {
    'guard-for-in': 'off',
    'import/no-duplicates': 'off',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-pascal-case': 'error',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
  env: {
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
