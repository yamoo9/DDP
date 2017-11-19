import $ from 'jquery';

$.fn.radioClass = function(class_name) {
  // let $this = this;
  return $.each(this, (index, item) => {
    // this === 상위 컨텍스트
    let $el = this.eq(index);
    $el.siblings(`.${class_name}`).removeClass(class_name);
    $el.addClass(class_name);
    return $el;
  });
};