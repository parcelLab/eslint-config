module.exports = {
  moduleFileExtensions: ["json", "ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "eslint/use-at-your-own-risk": "eslint/lib/unsupported-api.js",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.spec.ts"],
  verbose: true,
};
