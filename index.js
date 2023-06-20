module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "rules": {
        "curly": "error",
        "no-undef": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/html-self-closing": [
            "error",
            {
                "html": {
                    "void": "always",
                    "normal": "never",
                    "component": "always"
                },
                "svg": "always",
                "math": "always"
            }
        ],
        "vue/max-attributes-per-line": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-v-html": "off",
        "vue/singleline-html-element-content-newline": "off",
    }
}
