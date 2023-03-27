/**
 * Custom config base for all projects.
 */

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: ["unicorn", "promise", "@parcellab/eslint-plugin-no-require-assign"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  rules: {
    "promise/catch-or-return": ["error", { allowFinally: true }],
    "unicorn/catch-error-name": [
      "error",
      {
        ignore: ["^error\\d*$", "^err\\d*$"],
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "unicorn/import-style": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-null": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prevent-abbreviations": [
      "off",
      {
        extendDefaultReplacements: true,
        // Extends the default list: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/shared/abbreviations.js
        replacements: {
          args: false,
          abs: { absolute: true },
          addr: { address: true },
          alloc: { allocation: true },
          alt: { alternative: true },
          apiRes: { apiResponse: true },
          avg: { average: true },
          bg: { background: true },
          bin: { binary: true },
          buf: { buffer: true },
          calc: { calculation: true },
          cert: { certificate: true },
          cfg: { configuration: true },
          ch: { channel: true },
          char: { character: true },
          cmp: { compare: true },
          cnt: { counter: true },
          col: { column: true },
          coord: { coordinate: true },
          ctrl: { control: true },
          diff: { difference: true },
          fmt: { format: true },
          gen: { generate: true },
          hdr: { header: true },
          hw: { hardware: true },
          img: { image: true },
          info: { information: true },
          init: { initialization: true },
          k: { key: true },
          lang: { language: true },
          lat: { latitude: true },
          lon: { longitude: true },
          math: { mathematics: true },
          mem: { memory: true },
          mid: { middle: true },
          misc: { miscellaneous: true },
          net: { network: true },
          op: { operation: true },
          os: { operatingSystem: true },
          pic: { picture: true },
          pos: { position: true },
          pref: { preference: true },
          proc: { process: true },
          prof: { profiler: true },
          props: false,
          ptr: { pointer: true },
          px: { pixel: true },
          rand: { random: true },
          recv: { receive: true },
          rng: { range: true },
          sel: { selection: true },
          sem: { semaphore: true },
          seq: { sequence: true },
          sqrt: { squareRoot: true },
          stat: { statistic: true },
          ts: { timestamp: true },
        },
        allowList: {
          // Single word variables
          acc: true, // accumulator
          app: true, // application
          arg: true, // argument
          args: true, // arguments
          arr: true, // array
          attr: true, // attribute
          attrs: true, // attributes
          auth: true, // authentication
          btn: true, // button
          cb: true, // callback
          cmd: true, // command
          conf: true, // config
          ctx: true, // context
          db: true, // database
          dest: true, // destination
          dev: true, // development
          dir: true, // directory
          dirs: true, // directories
          doc: true, // document
          docs: true, // documents
          el: true, // element
          elem: true, // element
          env: true, // environment
          envs: true, // environments
          err: true, // error
          expr: true, // expression
          fn: true, // function
          func: true, // function
          id: true, // identifier
          len: true, // length
          lib: true, // library
          max: true, // maximum
          min: true, // minimum
          msg: true, // message
          num: true, // number
          obj: true, // object
          opts: true, // options
          param: true, // parameter
          params: true, // parameters
          pkg: true, // package
          prev: true, // previous
          prod: true, // production
          prop: true, // property
          props: true, // properties
          ref: true, // reference
          refs: true, // references
          req: true, // request
          res: true, // response
          ret: true, // return
          src: true, // source
          sync: true, // synchronization
          tmp: true, // temporary
          val: true, // value
          var: true, // variable
          vars: true, // variables
          // Multiple word variables
          customProps: true,
          htmlDocs: true,
          jsDocs: true,
          isDev: true,
          isDevMode: true,
          isProd: true,
          fetchArgs: true,
          paramAuth: true,
          rulesObj: true,
          searchParams: true,
          tokenParams: true,
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
    {
      /**
       * Include other file extensions other than the .js
       */
      files: ["**/*.cjs"],
    },
  ],
};
