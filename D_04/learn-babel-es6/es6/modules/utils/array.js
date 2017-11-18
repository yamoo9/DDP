let slice = Array.prototype.slice;

function makeArray(like_array_o) {
  // return slice.call(like_array_o);
  return [...like_array_o];
}