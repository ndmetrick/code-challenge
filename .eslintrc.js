module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "indent": ["error", 2],
    "no-console": "off",
    "strict": ["error", "global"],
    "curly": "warn",
    "semi": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "space-before-blocks": ["error", "always"]
  }
}
