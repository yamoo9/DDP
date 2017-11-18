/*! parameter.js @ 2017, yamoo9@naver.com */

///////////////////////
// Default Parameter //
///////////////////////

// ES5 //
Accordion = function (element, options, level) {
  // level 전달인자 초기 값 설정
  this.options = (options && typeof options === 'object' && !options.length) ? options : {};
  // level 전달인자 초기 값 설정
  this.level = level || 1;
};


// ES6 //
// 기본 매개변수 설정
// 기본 매개변수를 사용하면 값이 없거나 undefined가 전달될 경우,
// 매개변수를 기본값으로 초기화 할 수 있다.
// https://goo.gl/34EAkm



////////////////////
// Rest Parameter //
////////////////////

// ES5 //
// arguments 객체
// 유사배열 객체
function sum() {
  for (var l=arguments.length, r=0, n; (n=arguments[--l]); ) {
    r += n;
  }
  return r;
}

sum(1, 3, 10);
sum(29, 102, 7, 203, 10);


// 메서드 빌려쓰기 패턴을 사용한 배열화가 필요 (배열 메서드 사용하고자 할 경우)
function makeArray(o) {
  return Array.prototype.slice.call(o);
}

function total(){
  var o = makeArray(arguments), t = 0;
  o.forEach(function(i){ t += i; });
  return t;
}

total(81, 33, 92, 4);
total(28, 35, 1, 7);


// ES6 //
// rest 매개변수
// 나머지 매개변수(rest parameter) 구문은
// 전달인자를 배열로 참조합니다.
// https://goo.gl/MTHqGA

// 배열 객체
// 가장 마지막에 위치



/////////////////////
// Spread Operator //
/////////////////////

// ES5 //

// 배열 결합
var integer = [0, -10, 10];
var copy_integer = integer.slice();
var float   = [0.8, 0.43, 0.7823];

// 순차 결합
// [0, -10, 10, 0.8, 0.43, 0.7823]
var number_append = copy_integer.concat(float);

// 또는
function pushArray(o1, o2) {
  var o = o1.slice();
  o2.forEach(function(i) {
    o.push(i);
  });
  return o;
}
var number_pushed = pushArray(integer, float);

// 또 다른 방법은
var copy_integer = integer.slice();
var number_pushed_apply = copy_integer.push.apply(copy_integer, float);



// 중간 삽입 결합
// [0, -10, 0.8, 0.43, 0.7823, 10]
function insertArray(o1, n, o2) {
  var c = o1.slice();
  o2.forEach(function (i) {
    c.splice(n++, 0, i);
  });
  return c;
}

var number_insertion = insertArray(integer, 2, float);


// ES6 //
// 전개 연산자
// 전개 연산자(spread operator) 표현식(expression)은 2개 이상의 인수arguments(함수 호출 용)나
// 2개 이상의 요소elements(배열 리터럴 용) 또는 2개 이상의 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 합니다.
// https://goo.gl/KUNsTt

// 배열 복제

// 순차 결합 (concat, push 등)

// 중간 삽입 결합







/// Conclusion ////////////////////////////////////////////////////////////////

// ES6를 사용하여 프로젝트를 진행한다면?
// - 확장된 파라미터(매개변수) 사용법을 적절하게 사용