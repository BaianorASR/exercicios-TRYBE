const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

const myRemove = (arr, item) => {
  if (!arr.includes(item)) {
    return arr
  }
  arr.splice(arr.indexOf(item), 1);
  return arr
}

module.exports = {
  sum,
  myRemove,
};
