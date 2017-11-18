/*! ES5.js © yamoo9.net, 2017 */

//////////////////////////////
// 1. JavaScript 데이터 유형
// 참고: https://goo.gl/UqYzzm
//////////////////////////////

// 변수 선언
// var num, str, boo, arr, fun, obj;

// 선언된 변수에 값(리터럴, literal)을 할당
// num = 10;
// str = '해피 데이';
// boo = false;
// arr = [1, 4, 7];
// fun = function(){};
// obj = {};

// 디자인 패턴: single var pattern
var num = 10,
    str = '해피 데이',
    boo = false,
    arr = [1, 4, 7],    // new Array(1, 4, 7)
    fun = function(){}, // new Function()
    obj = {};           // new Object()


// 1-1) 원시(Primitive) 데이터 유형
// num, str, boo, null, undefined

// 1-2) 참조(Reference)형 데이터 유형
// arr, fun, obj
// new Number()
// new String()
// new Boolean()

// 1-3) 원시 데이터 타입, 참조형 데이터 타입 구분

// 1-3-1) 값 복사(pass by value)
// 원시 데이터 유형 (객체가 아님)
// null, undefined, num, str, boo
// 값 복사란?
// 동일해보이나, 실상 복사된 다른 값
// 결국, 하나의 값을 변경했을 때 나머지 다른 값은 변화가 없다.

console.groupCollapsed('값 복사 VS 값 참조');

var number_k = num; // 값(숫자 10) 복사
console.log('변경 전: number_k === num:', number_k === num);

// number_k 값 변경
number_k += 19; // 10 + 19 = 29

// 변경된 이후, 각 변수에 할당된 값을 비교
console.log('변경 후: number_k === num:', number_k === num);



// 1-3-2) 값 참조(pass by reference)
// 참조 데이터 유형 (객체)
// fun, arr, obj
// 값 참조란?
// 동일한 데이터를 양쪽에서 참조한 경우,
// 하나의 값을 변경하면 나머지 다른 값 또한 변경된다.

// 배열 객체 참조
var books = arr; // 메모리에 존재하는 동일한 객체를 각 변수가 참조
console.log('변경 전: books === arr:', books === arr);

books.unshift('Vue.js 완전 정복');
arr.push('jQuery 완전 정복');

console.log('변경 후: books === arr:', books === arr);


console.groupEnd('값 복사 VS 값 참조');



// 1-4) 자바스크립트 메모리 관리는 어떻게 하는가?
// 참고: https://goo.gl/EWWHnZ

// 가비지 컬렉터라는 로봇이 주어진 알고리즘을 사용하여,
// 자동으로 더 이상 사용되지 않는 데이터를 메모리에서 비워준다.




////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////


// 2-1) 데이터 타입 검증 방법 typeof
// 참고: https://goo.gl/6rpQQi

console.groupCollapsed('typeof 검증');
// 가장 큰 문제점: null, object, array를 구분할 수 없다.

console.log('typeof num:', typeof num);
console.log('typeof str:', typeof str);
console.log('typeof boo:', typeof boo);
console.log('typeof fun:', typeof fun);
console.log('typeof arr:', typeof arr);
console.log('typeof obj:', typeof obj);

function setProps(o, props) {
  if (typeof props === 'object') {
    console.log('통과된 값:', props);
    // for ( var prop in props ) {
    //   o[prop] = props[prop];
    // }
  }
  return o;
}
var new_o = setProps({}, null); // 조건 통과(PASS) = 문제됨!
var new_o = setProps({}, []); // 조건 통과(PASS) = 문제됨!
var new_o = setProps({}, { // 조건 통과(PASS) = 올바름!
  a: 10,
  b: function () {}
});


console.groupEnd('typeof 검증');




// 2-2) 데이터 타입 검증 방법 instanceof
// 참고: https://goo.gl/3w3EEw

console.groupCollapsed('instanceof 활용시 주의할 점');

// 객체를 생성할 수 있는 생성자 함수(Constructor)
function RemoteController(){}

// 생성자 함수를 통해 생성된 객체(Instance)
var remote_a = new RemoteController();
var remote_b = new RemoteController();
var remote_c = new RemoteController();

remote_a instanceof RemoteController; // true


var o = new Object(); // 생성자 함수 Object를 사용해서 새로운(new) 객체 o를 생성한다.
var is_object_instance = o instanceof Object;

// typeof의 문제점을 해결할 수 있을까?
// typeof는 배열 데이터를 객체라고 잘못 이야기 한다.
// 그렇다면 instanceof는 해당 문제를 올바르게 이야기 할까?
console.log('arr instanceof Array:', arr instanceof Array); // true

// 단, 문제가 있는데 (참고로 문제라기보다는 사람들 인식과 결과가 다르게 동작한다)
// 숫자 값, 문자 값, 불리언 값은 객체가 아니기에 instanceof로 검증하면 false를 반환한다.
console.log('num instanceof Number:', num instanceof Number); // true??? -> false

// JavaScript 상속 시스템을 거슬러 검증하기에 기대와 다른 결과를 도출할 수 있다.
console.log('arr instanceof Array:', arr instanceof Array); // false??? -> true

// 객체 지향 자바스크립트 프로그래밍
// 컴포넌트 개발
// 캐러셀
function Carousel(el_node, options){
  'use strict'; // 엄격한 문법 모드 발동

  // 유형 검증(type check validation)
  // this 검증

  // if ( !(this instanceof Carousel) ) {

  // 케이스 1) new 키워드를 강제화 하는 패턴
  // 코드 종료 없이 오류 메시지를 콘솔에 출력
  // console.error('new Carousel() 형식으로 사용하셔야 합니다.');
  // 코드 종료와 함께 오류 메시지를 콘솔에 출력
  //   throw new Error('new Carousel() 형식으로 사용하셔야 합니다.');

  // 케이스 2) new를 생략해도 객체가 생성되는 패턴
  //   return new Carousel(el_node, options);

  // }

  this.el = el_node;
  this.config = options;
}

var caro_el = document.querySelector('.my-carousel');
var my_caro = new Carousel( caro_el, {
  animate: true,
  infinite: false,
  auto_slide: true
} );

console.log('my_caro instanceof Carousel:', my_caro instanceof Carousel);

console.groupEnd('instanceof 활용시 주의할 점');

// 2-3) 데이터 타입 검증 방법 .consturctor 속성
// 참고: https://goo.gl/RqAF6f

console.groupCollapsed('.constructor 속성의 장점과 한계');

// JavaScript의 대부분은 모두 객체이다.
// 객체가 아닌 것들: 원시형 데이터 유형

// 모든 객체는 생성 과정에서 반드시 소유하고 있는 속성이 있다.
// 그 속성은 .constructor 이다. (생성자: constructor)
// 빌트인(내장), 커스텀(사용자정의) 생성자 모두 해당

console.info('데이터가 객체라면 반드시 .constructor 속성을 가지고 있어 생성자 검증이 100% 가능하다. 단, 객체가 아니면 오류를 발신한다.');

console.groupEnd('.constructor 속성의 장점과 한계');


// 2-4) 데이터 타입 검증 방법 직접 만든 유틸리티 함수
// 사용자가 필요에 의해 직접 제작하는 함수
function _type(o){
  // 해당 데이터가 어떤 유형의 데이터인지 문자열(소문자)로 반환
  return Object.prototype.toString.call(o).toLowerCase().slice(8,-1);
}

var y9 = {
  type: _type
};

window.$ = y9;

y9.type(null); // 'null'
y9.type([]);   // 'array'
y9.type({});   // 'object'





////////////////////////////
// 3. JavaScript 구문, 표현식
////////////////////////////


// 3-1) 구문(Statement)
// statement는 "구문" 이라고 할 수 있습니다.
// 의미 상으로 보면 자바스크립트 인터프리터(번역기)에게 내리는 지시문(Directive)이라 할 수 입니다.
// 인터프리터가 이것을 보고 어떤 동작을 해야하는지 알게됩니다.
// 구문은 어떻게 동작해야 하는지 동작만 알려주고 사라집니다.
// 즉, 구문의 결과로는 아무것도 남지 않습니다.


// 3-2) 표현식(Expression)
// 식은 expression 이라 하는데, 간단히 말해 하나의 값이 되는 것입니다.
// 결론적으로 다른 모든 식은 하나의 값이 수렴하여 값 식이 되는 것이므로 "식 == 값"으로 이해해도 무방합니다.







////////////////////
// 4. JavaScript 함수
////////////////////

// 함수호출 : 함수를 호출한 결과는 값이 됩니다.
// 자바는 void를 반환하면 값이 될 수 없습니다만,
// 자바스크립트는 명시적으로 반환하지 않아도 undefined 가 반환되어
// 언제나 값으로 수렴됩니다.


// 4-1) 영역(Scope)

// 4-1-1) 라이프 사이클(Life Cycle)

// 4-1-2) 호이스팅(Hosting)

// 4-1-3) this 컨텍스트 참조

// 4-1-4) .call(), .apply(), .bind()







////////////////////
// 5. JavaScript 배열
////////////////////


// 5-1) 데이터 관리

// 5-1-1) 데이터 아이템 생성(Create)

// 5-1-2) 데이터 아이템 읽기(Read)

// 5-1-3) 데이터 아이템 변경(Update)

// 5-1-4) 데이터 아이템 제거(Delete)


// 5-2) Array.isArray()


// 5-3) .forEach()  VS  .map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-4) .slice()  VS  .filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-5) .indexOf()  VS  .lastIndexOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


// 5-6) .every()  VS  .some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// 5-7) .reduce()  VS  .reduceRight()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight







////////////////////
// 6. JavaScript 객체
////////////////////


// 6-1) Object.create()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// 6-2) Object.defineProperty(), Object.defineProperties()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


// 6-3) Object.getPrototypeOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf


// 6-4) Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// 6-5) Object.seal()  VS Object.freeze()  VS  Object.preventExtensions()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions


// 6-6) Object.isSealed()  VS  Object.isFreeze()  VS  Object.isExtensible()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible







/////////////
// 7. ES5 상속
/////////////

var human = {
  sleeping : function() {},
  running  : function() {},
  eating   : function() {},
  going    : function() {},
};

var artist = Object.create(human, {
  thinking: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
  drawing: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
});






////////////////////////
// 8. DOM API
////////////////////////


// 8-1) DOM 선택 API 메서드
// getElementById()
// getElementsByTagName()
// getElementsByClassName() (IE 9+)
// querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
// querySelectorAll()
// matches() (IE 9+ `ms` 프리픽스 필요)
// - msMatcheSelector()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


// 8-2) Node 속성
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling
// parentNode
// nodeType
// nodeName
// nodeValue


// 8-3) Node 메서드
// hasChildNodes()
// appendChild()
// insertBefore()
// removeChild()
// replaceChild()
// cloneNode()
// contains()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
// isEqualNode() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
// compareDocumentPosition() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition


// 8-4) Document 메서드
// createElement()
// createTextNode()


// 8-5) HTML*Element 속성
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
// innerHTML
// outerHTML
// innerText
// textContent (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
// childElementCount (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
// classList (IE 10+)
// - add()
// - remove()
// - contains()
// - toggle()
// dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)


// 8-6) HTML*Element 메서드
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
// insertAdjacentHTML()
// https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
// insertAdjacentElement() (IE 8+)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// insertAdjacentText() (IE ?)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText







////////////////////////
// 9. AJAX & REST API
////////////////////////

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 설정
// 서버에 요청


// REST API
// HTTP 메서드: GET, POST, PUT, DELETE
// https://myjson.com


// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.