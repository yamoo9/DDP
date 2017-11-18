### 내비게이션

- [Home](../README.md)<br>
- [D_01](../D_01/README.md)<br>
- [D_02](../D_02/README.md)<br>
- [D_03](../D_03/README.md)<br>
- D_04<br>

---

###### DAY_04

## 모던 JavaScript 프레임워크

<img src="https://vuejs.org/images/logo.png" alt="" align="right" width="200" height="200">

## Vue DAY

셋째 주, [Vue 프레임워크](https://github.com/vuejs)에 대한 이해 및 활용 방법에 대해 이야기 나눠 봅니다.

### Vue 왜? Amazing 한가?

Keynote를 보면서 이야기 나눠 보겠습니다.

<img src="https://github.com/pablohpsilva/Goal/raw/master/src/assets/giphy.gif" alt="Magic" width="275" height="252">


[Vue JS 코어 레퍼런스](https://kr.vuejs.org/)
-
[Vue JS 코어 레퍼런스 치트시트](https://yamoo9.github.io/vue/)

---

### <img valign="bottom" src="https://cdn4.iconfinder.com/data/icons/music/256/Mic-Foam-White.png" alt="" width="40" height="40"> Vue를 사용해 본 사람들의 말말말<i>!</i>

    Vue.js는 내가 JavaScript를 좋아하게 한 이유입니다. 사용이 매우 쉽고 즐겁습니다.
    기본 서비스를 확장하는 플러그인 및 도구 생태계를 훌륭하게 갖추고 있습니다.

    크고 작은 모든 프로젝트에 신속하게 포함시킬 수 있으며 몇 줄의 코드를 작성하면 손쉽게 설정됩니다.
    Vue.js는 빠르고 가볍고 프론트 엔드 개발의 미래입니다!

    — 알렉스 키리아 키디스

>

    JavaScript를 시작했을 때 나는 많은 가능성을 알게 된 것을 기쁘게 생각했고,
    친구가 Vue.js를 배우라고 제안했을 때 나는 그의 조언을 따랐습니다.

    그리고 지금은 Vue.js를 주변 사람들에게 추천합니다. 프로젝트 생산성을
    향상시키고 싶다면 Vue 프레임워크를 당장 시작하세요!

    — 코스타스 마니아 티스

>

    Vue는 JavaScript 프레임 워크에서 원했던 것을 제공합니다. Vuex, Vue Router를 사용하여
    고급 SPA(Single Page Application)를 손쉽게 제작할 수 있습니다. 단연 지금까지 프레임워크 중
    가장 세련된 JavaScript 프레임 워크라 생각합니다.

    — 테일러 오트웰

>

    Vue.js를 사용하여 SPA 제작 시, 서버 사이드 렌더링 응용 프로그램에서 사용하는 것처럼
    자연스럽다고 느껴진 첫번째 프레임워크입니다. 프로젝트의 크고 작음과 관계없이 과하거나,
    부족함이 없는 멋진 프레임워크입니다!

    — 아담 왓슨

>

    내가 Vue.js를 좋아하는 이유는 내가 하이브리드 디자이너/개발자이기 때문입니다.
    React, Angular 및 다른 몇 가지 프레임워크를 살펴 봤지만... 학습 곡선이 상당해서 쓰기 싫더군요.
    하지만 Vue.js는 제가 이해할 수 있는 첫번째 프레임워크로 아주 맘에 듭니다.

    뿐만 아니라 경험 많은 Angular, React 개발자 역시 Vue.js를 주목하고 좋아한다는 것을 알았습니다.
    이는 JavaScript 세상에 전례가 없는 일이며 런던 Vue.js Meetup을 시작한 이유입니다.

    — 잭 바햄

---

<img src="http://react-etc.net/files/2016-10/1477312671_angular-react-vue-logos.png" alt="" align="right" width="227" height="151">

### Vue vs Angular vs React 프레임워크 비교

Vue.js에 대해 좋다는 이야기를 많이 드렸는데, 정말로 좋은지 의문이 드실 겁니다.<br>
Angular나 React 와 비교했을 때 어떤 점이 좋은 건지 이야기를 나눠 보겠습니다.

[Vue vs Angular vs React](./Vue-React-Angular.md)

---

<img src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/213/2133227/assets/470.IBM_Watson_Avatar_Logo.png" alt="" align="right" width="220" height="220">

### Vue 생태계 (Eco System)

###### 한글

- [vue-cli](https://github.com/vuejs-kr/vue-cli)
- [vue-loader](http://vue-loader.vuejs.org/kr/)
- [vue-router](https://router.vuejs.org/kr/)
- [vuex](https://vuex.vuejs.org/kr/)

###### 영문

- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [vuejs-templates](https://github.com/vuejs-templates)
- [vue-custom-element](https://karol-f.github.io/vue-custom-element/)
- [axios](https://github.com/mzabriskie/axios)
- [axios, es6-promise-polyfill](https://github.com/mzabriskie/axios/blob/master/UPGRADE_GUIDE.md#es6-promise-polyfill)
- [vuefire](https://github.com/vuejs/vuefire)

---

<img src="http://static.fliphtml5.com/web/demo/manual/files/pageConfig/Browsers_003.png" alt="" width="128" height="128" align="right">

### Vue 프레임워크는 IE 8을 지원하는가?

결론부터 말하면 __지원하지 않습니다__.<br>
Vue JS를 만든 Evan You는 IE 8을 지원할 계획이 없다고 합니다. (IE 8은 ES3 까지만 지원)<br>
뿐만 아니라 오늘날 사용되는 JavaScript 프레임워크(Angular, React, Riot, Vue) 모두 IE 9+ 지원합니다.

<br>

---

### 참고하면 좋을 Front-End 글

오늘날 프론트엔드 개발 환경은 급격히 진화하고 있고, 모던 브라우저들은 이미 충분히 많은 DOM/BOM API들을 구현했습니다.
우리는 jQuery를 DOM 처리나 이벤트를 위해 처음부터 배울 필요가 없습니다. React, Angular, Vue같은 프론트엔드
라이브러리들이 주도권을 차지하는 동안 DOM을 바로 처리하는 것은 안티패턴이 되었고, jQuery의 중요성은 줄어들었습니다.
이 프로젝트는 대부분의 jQuery 메소드의 대안을 IE 10 이상을 지원하는 네이티브 구현으로 소개합니다.

[You Dont Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.ko-KR.md)