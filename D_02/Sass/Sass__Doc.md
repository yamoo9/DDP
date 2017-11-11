###### Documentation

[← Back](../README.md)

# SassDoc

## 1. Sassdoc이란?
 > SassDoc은 Sass 라이브러리/프레임워크 사용법(API: 변수, 함수, 믹스인 등)을 문서로 만들어 주는 자동화 도구로서 특정 구문 주석을 인식 후 데이터를 로드하여 테마에 맞춰 자동으로 HTML 문서를 만들어 준다.

## 2. 설치
### Sassdoc 사용을 위해 우선 NPM을 사용하여 전역에 Sassdoc 모듈을 설치한다.
 ```sh
$ npm install sassdoc -g
 ```
## 3. 주석

Sassdoc은 [JSDoc](http://usejsdoc.org/)에서 크게 영향을 받았으며, 문서화되어야 하는 각 항목(변수, 함수, 믹스인 등) 앞에 `///` 주석을 이용하여 정보를 제공

## 4. 작성법

Sassdoc을 시작하는 첫 번째 행은 설명으로 시작하며 Sassdoc의 적절한 주석을 참조하여 추가한다. [Sassdoc의 주석](http://sassdoc.com/annotations/)

```scss
/// 요소의 크기(width, height)를 한 줄로 설정하도록 도와주는 믹스인
///
/// @group shorthand
/// @author yamoo9
///
/// @param {Length} $width - 요소의 너비
/// @param {Length} $height [$width] - 요소의 높이
/// @output `width`, `height`
///
/// @example scss - `.demo` 요소 크기 설정
///   .demo {
///     @include size(12rem, 4rem);
///   }
/// @example sass - `.demo` 요소 크기 설정
///   .demo
///     +size(12rem, 4rem)

@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
```

## 5. 실행

주석입력이 완료되면 터미널에서 아래와 같은 방법으로 Sassdoc을 실행한다.

```sh
# 기본 사용법
$ sassdoc {Sass 디렉토리}

# 출력 폴더 지정
$ sassdoc {Sass 디렉토리} --dest {SassDoc 자동 생성 파일 디렉토리}

# 제외하고자 하는 항목이 있을 경우 설정
$ sassdoc stylesheets/ '!stylesheets/vendors/*'
```

## 6. SassDoc 스니펫

Snippets 설정

### 6-1. command + shift + p
<img src="https://github.com/owl423/FDS04_Summary/raw/master/README/img/0526/snippets1.png" width="100%" alt="snippets 설정1">

### 6-2. snippets 입력창에 입력
<img src="https://github.com/owl423/FDS04_Summary/raw/master/README/img/0526/snippets2.png" width="100%" alt="snippets 설정2">

### 6-3. snippets 입력창에 입력
<img src="https://github.com/owl423/FDS04_Summary/raw/master/README/img/0526/snippets3.png" width="100%" alt="snippets 설정3"><br>

주석을 참고하여 다음과 같이 작성한다.

- 첫번째 속성이 명령어
- 두번째 prefix속성 값은 단축 명령어
- body속성 값에 배열로 내용을 작성하고 $+[nubmer]로 탭이동의 우선 순위를 지정한다.

### 6-4. 다음과 같이 동작 가능해진다.

<img src="https://github.com/owl423/FDS04_Summary/raw/master/README/img/0526/snippets4.png" width="100%" alt="snippets 사용화면1">

### 6-5. sassdoc 입력후 enter 혹은 tab key를 입력하면 짜잔
<img src="https://github.com/owl423/FDS04_Summary/raw/master/README/img/0526/snippets5.png" width="100%" alt="snippets 사용화면2">