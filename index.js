import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import destinationEsLintConfig from "@destination/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
  {
    extends: [
      destinationEsLintConfig,
      ...pluginVue.configs["flat/recommended"],
    ],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": [
        "error",
        {
          shallowOnly: true,
        },
      ],
      "vue/require-default-prop": "off",
    },
  },
  eslintConfigPrettier,
);
