/**
 * Config base for projects using react with typescript.
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        require.resolve('./typescript.js'),
      ],
      plugins: ['react'],
      rules: {
        // Define custom parcelLab rules
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
