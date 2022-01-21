const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, e) => acc.concat(e))
}

export default {
  flatten,
  arrays,
};