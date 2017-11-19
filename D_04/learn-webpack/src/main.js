// ——————————————————————————————————————————————————————
// Front-End 개발 환경
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
  // body.appendChild( component() );

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


// ——————————————————————————————————————————————————————
// Back-End 개발 환경 방식을 사용하여 Front-End에 적용
// Webpack을 사용해 번들링(묶음) 수행

// CSS 파일 로드
import './css/main.css';
import './css/header.css';

// ES 표준 모듈 로드
// 노드 개발 모듈: node_modules/
import _ from 'lodash';
import $ from 'jquery';

// 사용자 개발 모듈: user modules
import './plugins/jquery.radioClass';

// jQuery + Lodash 라이브러리를 활용한 스크립팅
let messages = ['Hello', 'VueJS', 'using', 'Webpack', ':)'];
let $heading = $('<h1>')
                .radioClass('webpack-heading')
                .text( _.join(messages, ' ') )
                .appendTo('body');

