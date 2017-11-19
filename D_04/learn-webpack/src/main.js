(function(global, _, $){
  'use strict';

  var document          = global.document;
  var body              = document.body;
  var component_message = [ 'Hello', 'Webpack', ':-)' ];

  function component(){
    var el = document.createElement('h1');
    el.classList.add('page-heading-lv1');
    // 의존 개발 모듈 Lodash 메서드 활용
    el.textContent = _.join( component_message, ' ' );
    // return elementNode
    return el;
  }
  body.appendChild( component() );

  /**
   * jQuery 버전
   */
  // function component_jquery(){
  //   return $('<h1>', {
  //     on: {
  //       click: function(e){
  //         $(e.target).remove();
  //       }
  //     }
  //   })
  //   .addClass('page-heading-lv1')
  //   .text(_.join(component_message, ' '));
  // }
  // $(body).append(component_jquery());

})(window, window._, window.jQuery);