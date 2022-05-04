module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ['unicorn', 'promise'],
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
  ],
  rules: {},
};
