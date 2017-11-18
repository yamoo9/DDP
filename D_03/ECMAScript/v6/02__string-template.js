/*! string-template.js @ 2017, yamoo9@naver.com */

//////////////////////
// String Additions //
//////////////////////

// ES5 //
// 표 정보
var delivery_table_info = {
  table_class : 'y9-table delivery',
  caption     : '배송 슬롯(투입구) 시간별 Open/Closed 상황',
  days        : '월 화 수 목 금'.split(' '),
  times       : ['09:00 - 11:00', '11:00 - 13:00']
};


// 방법 0. 읽기 힘든 문자열
// HTML Template
var delivert_table_0 = '<table class="' + delivery_table_info.table_class + '"><caption class="a11y-hidden">' + delivery_table_info.caption + '</caption><tr><td></td><th scope="col">' + delivery_table_info.days[0] + '</th><th scope="col">' + delivery_table_info.days[1] + '</th><th scope = "col">' + delivery_table_info.days[2] + '</th><th scope="col">' + delivery_table_info.days[3] + '</th><th scope="col">' + delivery_table_info.days[4] + '</th></tr><tr><th scope="row">' + delivery_table_info.times[0] + '</th><td>Closed</td><td>Open</td><td>Open</td><td>Closed</td><td>Closed</td></tr><tr><th scope="row">' + delivery_table_info.times[1] + '</th><td>Open</td><td> Open</td><td>Closed</td><td>Closed</td><td>Closed</td></tr></table>';


// 방법 1. 문자열 접합
var delivery_table_1 = '';
delivery_table_1 += '<table class="' + delivery_table_info.table_class + '">';
delivery_table_1 += '  <caption class="a11y-hidden">' + delivery_table_info.caption + '</caption>';
delivery_table_1 += '  <tr>';
delivery_table_1 += '    <td></td>';
delivery_table_1 += '    <th scope="col">'+ delivery_table_info.days[0] + '</th>';
delivery_table_1 += '    <th scope="col">'+ delivery_table_info.days[1] + '</th>';
delivery_table_1 += '    <th scope="col">'+ delivery_table_info.days[2] + '</th>';
delivery_table_1 += '    <th scope="col">'+ delivery_table_info.days[3] + '</th>';
delivery_table_1 += '    <th scope="col">'+ delivery_table_info.days[4] + '</th>';
delivery_table_1 += '  </tr>';
delivery_table_1 += '  <tr>';
delivery_table_1 += '    <th scope="row">' + delivery_table_info.times[0] + '</th>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '    <td>Open</td>';
delivery_table_1 += '    <td>Open</td>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '  </tr>';
delivery_table_1 += '  <tr>';
delivery_table_1 += '    <th scope="row">' + delivery_table_info.times[1] + '</th>';
delivery_table_1 += '    <td>Open</td>';
delivery_table_1 += '    <td>Open</td>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '    <td>Closed</td>';
delivery_table_1 += '  </tr>';
delivery_table_1 += '</table>';


// 방법 2. 배열 join
var delivery_table_2 = [
  '<table class="' + delivery_table_info.table_class + '">',
  '<caption class="a11y-hidden">' + delivery_table_info.caption + '</caption>',
    '<tr>',
      '<td></td>',
      '<th scope="col">'+ delivery_table_info.days[0] + '</th>',
      '<th scope="col">'+ delivery_table_info.days[1] + '</th>',
      '<th scope="col">'+ delivery_table_info.days[2] + '</th>',
      '<th scope="col">'+ delivery_table_info.days[3] + '</th>',
      '<th scope="col">'+ delivery_table_info.days[4] + '</th>',
    '</tr>',
    '<tr>',
      '<th scope="row">' + delivery_table_info.times[0] + '</th>',
      '<td>Closed</td>',
      '<td>Open</td>',
      '<td>Open</td>',
      '<td>Closed</td>',
      '<td>Closed</td>',
    '</tr>',
    '<tr>',
      '<th scope="row">' + delivery_table_info.times[1] + '</th>',
      '<td>Open</td>',
      '<td>Open</td>',
      '<td>Closed</td>',
      '<td>Closed</td>',
      '<td>Closed</td>',
    '</tr>',
  '</table>'
].join('');


// 방법 3. 이스케이프(\)
var delivery_table_3 = '\
  <table class="' + delivery_table_info.table_class + '">\
    <caption class="a11y-hidden">' + delivery_table_info.caption + '</caption>\
    <tr>\
      <td></td>\
      <th scope="col">'+ delivery_table_info.days[0] + '</th>\
      <th scope="col">'+ delivery_table_info.days[1] + '</th>\
      <th scope="col">'+ delivery_table_info.days[2] + '</th>\
      <th scope="col">'+ delivery_table_info.days[3] + '</th>\
      <th scope="col">'+ delivery_table_info.days[4] + '</th>\
    </tr>\
    <tr>\
      <th scope="row">' + delivery_table_info.times[0] + '</th>\
      <td>Closed</td>\
      <td>Open</td>\
      <td>Open</td>\
      <td>Closed</td>\
      <td>Closed</td>\
    </tr>\
    <tr>\
      <th scope="row">' + delivery_table_info.times[1] + '</th>\
      <td>Open</td\
      <td>Open</td\
      <td>Closed</td\
      <td>Closed</td\
      <td>Closed</td\
    </tr>\
  </table>\
';


// ES6 //
// `` 백틱(Bactick) 문자
// ${expression} 템플릿
var table_template = `
  <table class="y9-table delivery">
  <caption class="a11y-hidden">${delivery_table_info.table_class}</caption>
  <tr>
    <td></td>
    <th scope="col">${delivery_table_info.days[0]}</th>
    <th scope="col">${delivery_table_info.days[1]}</th>
    <th scope="col">${delivery_table_info.days[2]}</th>
    <th scope="col">${delivery_table_info.days[3]}</th>
    <th scope="col">${delivery_table_info.days[4]}</th>
  </tr>
  <tr>
    <th scope="row">${delivery_table_info.times[0]}</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">${delivery_table_info.times[1]}</th>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
</table>
`;


// ------------------------------------------


// string.includes()
// includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 결정하고,
// 그 결과를 true 또는 false로 반환
// https://goo.gl/i42DvH


// string.startsWith()
// startsWith() 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인 할 수 있으며,
// 그 결과는 true 혹은 false로 반환
// https://goo.gl/YIQb4i


// string.endsWith()
// endsWith() 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인 할 수 있으며,
// 그 결과를 true 혹은 false로 반환
// https://goo.gl/ZCxoCw


// string.repeat()
// repeat()메서드는 호출된 문자열의 설정된 수만큼 복사하여,
// 새 문자열을 생성하고 반환
// https://goo.gl/L9rYD9







/// Conclusion ////////////////////////////////////////////////////////////////

// ES6를 사용하여 프로젝트를 진행한다면?
// - 백틱 문자와 템플릿 보간법을 적극 사용한다
// - String 객체의 메서드를 적절하게 사용