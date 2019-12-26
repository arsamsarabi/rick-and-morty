module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    indent: "off",
    "no-unused-vars": "off",
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'react/display-name': 'off',
  }
}