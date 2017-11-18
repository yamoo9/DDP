/*! array-additions.js @ 2017, yamoo9@naver.com */

//////////////////////
// Array Additions  //
//////////////////////

/// 배열 결합(concatenate) ///

// ES5 //
// array1.concat(array2)

// ES6 //
// array1 = [...array1, ...array2]



/// 배열 뒤에 삽입(push) ///

// ES5 //
// array1.push.apply(array1, array2)

// ES6 //
// array1.push(...array2)



/// 배열 임의 삽입(splice) ///

// ES5 //
// function insertArray(o1, n, o2) {
//   var c = o1.slice();
//   o2.forEach(function (i) {
//     c.splice(n++, 0, i);
//   });
//   return c;
// }


// ES6 //
// array1.splice(2, 0, ...array2)



/// 배열 복제(copy) ///

// ES5 //
// array1.slice();

// ES6 //
// array1 = [...array1];


// ------------------------------------------

// array.from()
// Array.from() 메소드는 유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.
// https://goo.gl/WNGQDb

// DOM Nodelist와 같은 유사배열(like array object)을 Array로 변경할 때 유용
let lis = document.querySelectorAll('ul.fancy li');
Array.from(lis).forEach(function (li) {
  console.log(li); // DOM ElementNode
});

// —

let spans = document.querySelectorAll('span.name');

// map() 사용 시,
let names1 = Array.prototype.map.call(spans, function(s) {
  return s.textContent;
});

// Array.from() 사용 시,
let names2 = Array.from(spans, function(s) {
  return s.textContent;
});


// array.find()
// find()메서드는 해당 배열 안의 값을 하나 반환합니다.
// 이 때, 콜백으로 전달받은 테스트 함수가 요구하는 조건을 만족하는 값을 반환합니다.
// 그렇지 않으면 undefined를 반환합니다.
// https://goo.gl/24Hnf9


// array.findIndex()
// findIndex () 메서드는 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
// 그렇지 않으면 -1이 리턴됩니다.
// https://goo.gl/KnqK13


// array.includes()
// 배열에 특정 요소가 포함돼있는지 알아내어 true 또는 false를 적절히 반환합니다.
// https://goo.gl/9o8Vf9


// array.fill()
// fill() 메소드는 배열의 시작 인덱스부터 끝 인덱스까지 정적 값으로 배열 요소들을 채웁니다.
// https://goo.gl/NNJp5k


// array.keys()
// 배열의 각 인덱스에 대한 key들을 가지는 새로운 Array Iterator 객체를 반환합니다.
// https://goo.gl/bVcAC9


// array.values()
// 배열의 요소값들에 대한 Array Iterator 객체를 반환합니다.
// https://goo.gl/cLuXnW


// array.entries()
// 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 배열 반복자 객체를 반환합니다.
// https://goo.gl/WHDSGo


// array.copyWithin()
// copyWithin() 메서드는 배열의 일부를 복사한 뒤,
// 동일한 배열의 다른 위치에 덮어쓰기 한 다음, 배열 자신을 반환합니다.
// 이 때, 크기(배열의 길이) 를 수정하지 않고 반환합니다.
// https://goo.gl/dhggqg



/// Conclusion ////////////////////////////////////////////////////////////////

// ES6를 사용하여 프로젝트를 진행한다면?
// - 배열은 데이터 관리에 자주 사용되는 데이터 유형이다
// - 새롭게 추가된 메서드의 사용법을 정확하게 이해하고 사용

// 참고
// https://goo.gl/5Cwygh

