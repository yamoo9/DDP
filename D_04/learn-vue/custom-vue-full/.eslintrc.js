// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  globals: {
    Vue: true
  },

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',

  // *.vue 파일 린팅에 필요
  plugins: [
    'html'
  ],

  // 사용자 정의 규칙
  // ESLint 규칙:
  // http://eslint.org/docs/rules/
  // https://goo.gl/2P8squ
  'rules': {
    // 화살표 함수 허용
    'arrow-parens': 0,
    // async-await 허용
    'generator-star-spacing': 0,


    'no-console': 0,
    'no-unused-vars': 0,
    'indent': [
        'error',
        2
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'quotes': [
        'error',
        'single'
    ],
    'semi': [
        'error',
        'always'
    ],

    // 개발 중 디버깅 허용
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
