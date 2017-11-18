/*! let-const.js @ 2017, yamoo9@naver.com */

////////////////
// let, const //
////////////////


// 1. var 키워드 사용에서 주의할 점 [ES5]
// https://goo.gl/UE9hYh

// 1-1. 함수 스코프 (Function-level Scope)
// 1-2. 호이스팅 (Hoisting) 현상
// 1-3. 클로저 (Closure)
// 1-3. IIFE (Immediately Invoked Function Expressions: “Iffy”라고 발음) 패턴



// 2. let 키워드 도입 [ES6]
// https://goo.gl/kBquFB

// 2-1. 블록 스코프 (Block-level Scope)
// 2-2. let 호이스팅 현상 (var와 비교)
// 2-3. 클로저 VS 블록 스코프
// 2-4. 전역 객체의 속성 (var, let 전역 변수의 특징)



// 3. const 상수 [ES6]
// https://goo.gl/TiqJRP

// 3-1. 선언과 동시에 초기화, 할당이 요구됨.
// 3-2. 초기화 이후 재할당 금지.
// 3-3. const 객체 (const 객체의 속성은 재할당이 가능)






/// Conclusion ////////////////////////////////////////////////////////////////

// ES6를 사용하여 프로젝트를 진행한다면?
// - 가능하다면 var를 사용하지 않는 것이 좋다
// - 재할당이 요구되는 원시 데이터 유형은 let 사용
// - 재할당이 요구되지 않는 객체 데이터 유형은 const 사용