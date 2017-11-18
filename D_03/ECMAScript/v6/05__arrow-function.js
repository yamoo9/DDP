/*! arrow-function.js @ 2017, yamoo9@naver.com */

////////////////////
// Arrow Function //
////////////////////

// 화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고
// 자신의 this, arguments, super 또는 new.target을 바인딩 하지 않습니다. 화살표 함수는 항상 익명입니다.
// 이 함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 그래서 생성자로서 사용할 수 없습니다.
// https://goo.gl/hdduQF

var identify = 'window 객체';

var compare_fn_arrow = {
  identify: 'compare_fn_arrow 객체',
  whatIsThis: function () {
    console.log(this.identify); // 'compare_fn_arrow 객체'
  },
  whatIsThisArrow: () => {
    console.log(this.identify); // 'window 객체'
  }
};


// ES5 //
var o = {
  name: '바닐라 라떼',
  intervalPrintName: function(){
    var _this = this;
    window.setInterval(function(){
      console.log(_this.name);
    }, 3000);
  }
};


// ES6 //






/// Conclusion ////////////////////////////////////////////////////////////////

// ES6를 사용하여 프로젝트를 진행한다면?
// - 배열은 데이터 관리에 자주 사용되는 데이터 유형이다
// - 새롭게 추가된 메서드의 사용법을 정확하게 이해하고 사용