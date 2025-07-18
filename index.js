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
      "vue/no-undef-components": [
        "error",
        {
          ignorePatterns: [],
        },
      ],
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/no-unused-properties": [
        "error",
        {
          deepData: true,
          groups: ["props", "data", "computed", "methods", "setup"],
        },
      ],
      "vue/prefer-use-template-ref": "error",
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "vue/require-typed-ref": "error",
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-macros-order": [
        "error",
        { order: ["defineProps", "defineEmits"] },
      ],
      "vue/block-order": [
        "error",
        {
          order: ["script[setup]", "template", "style", "script:not([setup])"],
        },
      ],
    },
  },
  eslintConfigPrettier,
);
