'use strict';

// ---------------------------------------------------------------------------------------
// let, const
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const
(function (global) {

  var document = global.document;
  var body = document.body;
  var container = document.createElement('div');

  container.setAttribute('class', 'container');
  body.insertAdjacentElement('afterbegin', container); // <body> 바로 아래 위치에 요소가 추가
})(window);

// ---------------------------------------------------------------------------------------
// template string ``
// interpolation ${}
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings


// ---------------------------------------------------------------------------------------
// parameter [default, rest]
// spread operator
// https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread


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
