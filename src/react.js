/**
 * Config base for projects using react.
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.jsx'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        require.resolve('./base.js'),
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react'],
      rules: {},
    },
  ],
};
