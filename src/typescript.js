/**
 * Custom config base for projects using typescript.
 */

module.exports = {
  extends: require.resolve('./base.js'),
  overrides: [
    {
      // For performance run typescript on ts files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'default', format: ['camelCase'] },
          { selector: 'enumMember', format: ['PascalCase'] },
          { selector: 'function', format: ['camelCase', 'PascalCase'] },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allowSingleOrDouble',
          },
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
          {
            selector: ['typeProperty', 'objectLiteralProperty'],
            format: null,
            leadingUnderscore: 'allow',
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_+$' },
        ],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowAny: true },
        ],
      },
    },
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
      },
    },
  ],
};
