/**
 * Config base for projects using react with typescript.
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: require.resolve('./typescript.js'),
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'airbnb/hooks',
        require.resolve('./typescript.js'),
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react'],
      rules: {
        'react/require-default-props': 'off',
      },
    },
  ],
};
