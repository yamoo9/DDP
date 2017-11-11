###### CSS Layout

[← Back](../README.md)

# CSS Grid Module

## 1. CSS 레이아웃 역사

1. 레이아웃이 없던 시절
1. Table 레이아웃
1. Frame 레이아웃
1. Floating, Positioning 레이아웃
1. Flexbox 레이아웃
1. Grid 레이아웃

## 2. CSS Grid 모듈

- W3C, CSS Grid Module - Candidate Recommendation
- W3C, Process
- Browser 지원 범위
  - IE 10+, Edge 14- 구형 문법 지원
- Polyfill

## 3. CSS Grid 용어

용어 | 설명 | 비고
--- | --- | ---
Grid | 그리드 컨테이너 요소에 설정하면 내부에 포함된 요소가 그리드 아이템으로 설정됩니다. |
Grid Line | 그리드를 구성하는 수직/수평선을 말합니다. |
Grid Track | 그리드 라인(수직/수평선) 사이 공간을 말합니다. |
Grid Cell | 4개의 그리드 라인(사각형) 공간을 말합니다. |
Grid Area | 4개의 그리드 라인(사각형) 영역을 말합니다. |
Grid Gutters | 컬럼/로우 사이 공간을 말합니다. | 지원 예정

## 4. CSS Grid 사용법

### 4-1. 그리드 컨테이너 설정

```css
.grid-container {
  display: grid;
}
```

### 4-2. 그리드 템플릿 컬럼/로우 설정

```css
.grid-container {
  display: grid;
  /* 2행 3열 그리드 설정 */
  grid-template-rows: 150px 150px; /* 2행 */
  grid-template-columns: 150px 150px 150px; /* 3열 */
}
```

### 4-3. 그리드 아이템 포지셔닝

```css
.grid-item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
```

아래와 같이 속성을 단축해서 사용할 수도 있습니다.

```css
.grid-item {
  grid-column: 1/3; /* <start>/<end> */
  grid-row: 2/3; /* <start>/<end> */
}
```


---

## Grid 컨테이너 속성

```css
.grid-container {

  display: grid;

  grid-template
  grid-template-columns
  grid-template-rows
  grid-template-areas

  grid-gap
  grid-column-gap
  grid-row-gap

  grid-auto-flow
  grid-auto-columns
  grid-auto-rows

}

```

- 네임드 라인(Named Line)
- 템플릿 에이리어(Template Area)