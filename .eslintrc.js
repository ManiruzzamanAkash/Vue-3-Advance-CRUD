module.exports = {
    parserOptions: {
        "parser": "babel-eslint",
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
      'vue/multi-word-component-names': 0,
    },
}