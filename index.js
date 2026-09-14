import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import destinationEsLintConfig, {
  prettierSafeOverrides,
} from "@destination/eslint-config";
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
      // `consistent-boolean-name` only recognises `ref()`/`computed()` called
      // directly on a `vue` import, so a boolean held by any other ref —
      // VueUse's composables, our own — reads as non-boolean and an idiomatic
      // `isFoo` gets reported. Mapping `Ref` to `value` resolves it through the
      // type checker instead, which covers the whole family: `ShallowRef` and
      // `ComputedRef` both extend `Ref`.
      "unicorn/consistent-boolean-name": [
        "error",
        { wrappers: { Ref: "value" } },
      ],
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
  // eslint-plugin-vue's recommended config is extended after the base config, so
  // its stylistic rules come back on and eslintConfigPrettier has to run again
  // here. That also re-disables the base config's prettier-safe overrides, so
  // they have to be re-applied last.
  eslintConfigPrettier,
  prettierSafeOverrides,
);
