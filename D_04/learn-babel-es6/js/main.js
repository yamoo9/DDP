'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Babel 을 사용하면
// 좋은 코딩 습관을 가질 수 있도록 훈련할 수 있다.
// 초반에는 생소한, 문법적 오류를 접하게 되면서 다소 짜증이 날 수 있지만.
// 굿 코딩 패턴 학습으로서 매우 좋다.

// ---------------------------------------------------------------------------------------
// let, const
// var의 부족한 부분을 보완.
// 호이스트, 중복 선언, 읽기전용을 변경할 수 없다.
// 블록 스코프를 지원할 수 있다.
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const
(function (global) {

  var document = global.document;
  var body = document.querySelector('body');
  var container = document.createElement('div');

  container.setAttribute('class', 'container');
  body.insertAdjacentElement('afterbegin', container); // <body> 바로 아래 위치에 요소가 추가

  // body = '문서의 본문 객체';

  var scope = '영역';

  // let scope = 'Lexical Syntax';
})(window);

// ---------------------------------------------------------------------------------------
// template string `` <- HTML 코드 '', ""
// interpolation ${}, Vue {{}}
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings

var day = '일요일 아침';
var message = '\uC624\uB298\uB3C4 \'\uB9E4\uC6B0\' "\uC88B\uC740" ' + day + '\uC785\uB2C8\uB2E4. :-)';

// ---------------------------------------------------------------------------------------
// parameter [default, rest]
// spread operator ...
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread

var frameworks = 'vue.js react angular ember backbone'.split(' '); // string => array

// let copy_frameworks = frameworks.slice();
var copy_frameworks = [].concat(_toConsumableArray(frameworks));

var libraries_and_frameworks = ['jquery', 'lodash'].concat(_toConsumableArray(frameworks), ['scrollmagic']);

function displayOrder() {
  for (var _len = arguments.length, js_lib_frameworks = Array(_len), _key = 0; _key < _len; _key++) {
    js_lib_frameworks[_key] = arguments[_key];
  }

  console.log(arguments); // 유사 배열: like array object
  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    return console.log(item);
  });

  console.log(js_lib_frameworks); // array
  js_lib_frameworks.forEach(function (item, index) {
    return console.log(item, index);
  });
}

displayOrder.apply(undefined, _toConsumableArray(libraries_and_frameworks));

// ---------------------------------------------------------------------------------------
// arrow function
// this context
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this


// ---------------------------------------------------------------------------------------
// Enhanced Object Literals
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-enhanced-object-literals


// ---------------------------------------------------------------------------------------
// Modules
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules


// ---------------------------------------------------------------------------------------
// Classes
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-classes


// ---------------------------------------------------------------------------------------
// Set
// Map
// WeekSet
// WeakMap
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-map-set-weak-map-weak-set

// Sets
// 유일한 값을 가진 데이터 리스트.
// array와 달리, 중복되는 데이터를 허용하지 않는다.
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
// key: value 쌍으로 이루어진 데이터 리스트.
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) === 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, {
  extra: 42
});
wm.size === undefined;

// Weak Sets
var ws = new WeakSet();
ws.add({
  data: 42
});
// 추가된 객체는 참조가 없기 때문에 리스트에 포함되지 않음.


// new Set()
// .size
// .add()
// .has()
// .delete()
// .clear()
// .forEach()
// .entries()
// .keys()
// .values()

// new Map()
// .size
// .set()
// .get()
// .has()
// .delete()
// .clear()
// .forEach()
// .entries()
// .keys()
// .values()

// new WeakSet()
// .add()
// .has()
// .delete()

// new WeakMap()
// .set()
// .get()
// .has()
// .delete()
