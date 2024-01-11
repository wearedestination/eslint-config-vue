# Destination ESLint Config Vue

Defines a set of rules used by [ESLint](https://eslint.org/) to enforce our JS/TS coding standards for Vue projects

## Installation

```sh
yarn add @destination/eslint-config-vue eslint --dev
```

## Usage

Add the following to your project's ruleset e.g. in `package.json`:

```json
{
    "eslint": {
        "extends": "@destination/eslint-config-vue"
    }
}
```

Run `eslint` as normal e.g.:

```sh
yarn eslint 'assets/**/*.{js,ts,vue}'
```

## License

Released under the [MIT license](LICENSE)
