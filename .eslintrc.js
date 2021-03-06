// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //函数的参数括号前必须没有空格 => func()
    //'space-before-function-paren': ['error', 'never'],
    'space-before-function-paren': 0,
    'semi': ['error', 'always'],
    'eol-last': 0,
    //注释双斜杠后必须带一个空格
    'spaced-comment': 0,
    'no-shadow-restricted-names': 0,
    'padded-blocks': 0
  }
}
