// CommonJS 진영의 방식
// node_modules 디렉토리 내부 개발 모듈 로드
// let $ = require('jquery');

// node_modules 디렉토리 내부가 아닌, 상대 경로의 개발 모듈 로드
let $ = require('./modules/utils/type');

console.dir( $.type(global) );
console.dir( $.isNumber(10) );
console.dir( $.isEmptyObject({}) );

// ES6 표준 방법
// import from
// import $ from 'jquery';
