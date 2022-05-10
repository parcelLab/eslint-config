module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['unicorn', 'promise'],
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    'unicorn/no-array-for-each': 'off',
  },
};
