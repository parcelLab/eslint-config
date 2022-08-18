/**
 * Custom config base for all projects.
 */

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["unicorn", "promise"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  rules: {
    "promise/catch-or-return": ["error", { allowFinally: true }],
    "unicorn/no-array-for-each": "off",
    "unicorn/no-null": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          // Extends the default list: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/shared/abbreviations.js
          abs: true, // absolute
          addr: true, // address
          alloc: true, // allocation
          alt: true, // alternative
          app: true, // application
          auth: true, // authentication
          avg: true, // average
          bg: true, // background
          bin: true, // binary
          buf: true, // buffer
          char: true, // character
          calc: true, // calculation
          cert: true, // certificate
          cfg: true, // configuration
          ch: true, // channel
          cmd: true, // command
          cmp: true, // compare
          cnt: true, // counter
          col: true, // column
          coord: true, // coordinate
          ctrl: true, // control
          diff: true, // difference
          expr: true, // expression
          fmt: true, // format
          gen: true, // generate
          hdr: true, // header
          hw: true, // hardware
          id: true, // identifier
          img: true, // image
          info: true, // information
          init: true, // initialization
          k: true, // key
          lang: true, // language
          lat: true, // latitude
          lib: true, // library
          lon: true, // longitude
          math: true, // mathematics
          max: true, // maximum
          mem: true, // memory
          mid: true, // middle
          min: true, // minimum
          misc: true, // miscellaneous
          net: true, // network
          op: true, // operation
          os: true, // operating system
          pic: true, // picture
          pos: true, // position
          pref: true, // preference
          proc: true, // process
          prof: true, // profiler
          ptr: true, // pointer
          px: true, // pixel
          rand: true, // random
          recv: true, // receive
          rng: true, // range
          sem: true, // semaphore
          sel: true, // selection
          seq: true, // sequence
          stat: true, // statistic
          sqrt: true, // square root
          sync: true, // synchronize
          ts: true, // timestamp
        },
      },
    ],
  },
  overrides: [
    {
      /**
       * Relax rules in config files
       */
      files: [
        "**/{commitlint,jest}.config.{j,t}s?(x)",
        "**/webpack.*.{j,t}s",
        "**/typedoc.js",
        "**/.eslintrc.js",
        "**/.stylelintrc.js",
      ],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
