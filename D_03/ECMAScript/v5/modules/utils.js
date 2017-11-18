function type(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}

function isArray(data) {
  return type(data) === 'array';
}

function makeArray(like_array_o) {
  return Array.slice.call(like_array_o);
}