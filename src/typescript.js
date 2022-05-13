/**
 * Custom config base for projects using typescript.
 */

module.exports = {
  extends: [require.resolve('./javascript.js')],
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
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // Define custom parcelLab rules
      },
    },
  ],
};
