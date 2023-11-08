module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    // parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    "vue"
    // "@typescript-eslint"
  ],
  rules: {
    /* "vue/no-v-html": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
        },
      },
    ],
    "no-console": "warn",
    "no-unused-vars": "off",
    "no-irregular-whitespace": "off",
    "no-extra-semi": "warn",
    "no-undef": "warn", */
    quotes: ["warn", "double"]
  }
}
