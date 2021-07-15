module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "indent": [2, "tab"],
    "no-tabs": "off",
    'no-console': 'off',
    "no-mixed-spaces-and-tabs": 0, // disable rule
  }
};
