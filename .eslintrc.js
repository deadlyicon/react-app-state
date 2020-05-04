module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "indent": [
      "error",
      2,
      { "flatTernaryExpressions": true },
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": "off",
    "semi": [
      "error",
      "never"
    ],
    "no-console": "off",
    "no-unused-vars": ["error", { "varsIgnorePattern": "^(h|_)$" }],
    "no-unused-expressions": "off",
    "react/react-in-jsx-scope": "off",
    "space-before-function-paren": "off",
    "react/jsx-wrap-multilines": "off",
    "object-curly-spacing": "off",
    "comma-dangle": "off",
    "space-before-blocks": "off",
    "curly": "off",
    "prefer-reflect": "off",
    "padded-blocks": "off",
    "keyword-spacing": "off",
    "max-nested-callbacks": "off",
    "no-multi-spaces": "off",
    "key-spacing": "off",
    "no-use-before-define": "off",
    "no-nested-ternary": "off",
    "operator-linebreak": "off",
    "no-return-assign": "off",
    "camelcase": "off",
    "quote-props": "off",
    "no-new": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": [1, { skipUndeclared: true }]
  }
};
