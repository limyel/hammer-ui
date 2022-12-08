module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn": "off",
  }
}
