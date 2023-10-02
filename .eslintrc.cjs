module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
  ],
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["default", "index"]
    }],
    "no-console": 0,
    "comma-dangle": 0,
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
  },
  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
};
