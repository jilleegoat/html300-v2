module.exports = {
  root: false,
  env: {
    node: true, 
    es2021: true, // This enables ES6+ syntax
    browser: true, // If your code also runs in the browser, this is useful
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
