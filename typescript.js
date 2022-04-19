// TypeScript rules with jest support
module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    require.resolve('./base.js'),
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_+$' },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowAny: true },
    ],
  },
  overrides: [
    {
      /**
       * Relax rules in test files
       */
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test/**/*.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)',
        '**/*.test.{j,t}s?(x)',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'unicorn/no-array-for-each': 'off',
      },
    },
  ],
};
