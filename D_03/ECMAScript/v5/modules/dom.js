function queryAll(selector) {
  if (typeof selector !== 'string') {

    throw 'selector 인자는 문자 데이터로 전달해주세요.';
  }
  return document.querySelectorAll(selector);
}

function query(selector) {
  if (typeof selector !== 'string') {
    throw 'selector 인자는 문자 데이터로 전달해주세요.';
  }
  return document.querySelector(selector);
}

window.q = query;
window.qa = queryAll;