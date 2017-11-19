import $ from 'jquery';

$.fn.radioClass = function(class_name) {
  // ES5
  // let $this = this;
  // return $.each($this, (index, item) => {
  //   let $el = $this.eq(index); // 팩토리 함수 $() 매번 호출하여 객체를 생성할 필요 X

  // ES6
  return $.each(this, (index, item) => {
    // 화살표 함수를 사용하면 this는 상위 컨텍스트를 참조
    let $el = this.eq(index);
    $el.siblings(`.${class_name}`).removeClass(class_name);
    $el.addClass(class_name);
    return $el;
  });

};