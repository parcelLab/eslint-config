// TypeScript rules with jest support
module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  extends: [
    'plugin:jest/recommended',
    require.resolve('./base.js'),
  ],
  rules: {},
};
