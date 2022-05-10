module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react'],
  extends: ['airbnb/hooks', require.resolve('./base.js')],
};
