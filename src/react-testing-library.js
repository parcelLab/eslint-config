/**
 * Config base for projects using react-testing-library.
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  overrides: [
    {
      // For performance enable react-testing-library only on test files
      files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
      // React testing library rules are specific to tests and extending base.js is not needed as other config will cover them
      extends: ['plugin:testing-library/react'],
      rules: {},
    },
    {
      files: ['**/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
};
