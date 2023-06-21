module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "extends": [
        "eslint-config-airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "rules": {
        "curly": "error",
        "no-undef": "off",
        "indent": [
            "error",
            4
        ],
        "max-len": "off",
        "comma-dangle": "off",
        "object-curly-spacing": "off",
        "lines-between-class-members": "off",
        "no-use-before-define": "off",
        "no-new": "off",
        "object-curly-newline": "off",
        "no-console": "off",
        "func-names": [
            "error",
            "as-needed"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "onlyOneSimpleParam": true
            }
        ],
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "import/extensions": [
            "error",
            "never"
        ],
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
        "vue/singleline-html-element-content-newline": "off"
    }
};
