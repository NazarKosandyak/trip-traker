module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "eslint-config-typescript",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
