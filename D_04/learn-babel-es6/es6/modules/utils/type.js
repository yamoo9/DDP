let toString = Object.prototype.toString;

function type(data) {
  return toString.call(data).toLowerCase().slice(8,-1);
}

function isNumber(data) {
  return type(data) === 'number';
}

function isString(data) {
  return type(data) === 'string';
}

function isBoolean(data) {
  return type(data) === 'boolean';
}

function isFunction(data) {
  return type(data) === 'function';
}

function isArray(data) {
  return type(data) === 'array';
}

function isObject(data) {
  return type(data) === 'object';
}

function isEmptyObject(data) {
  return isObject(data) && (Object.entries(data).length === 0);
}