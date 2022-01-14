const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('coloque somente números');
  }
  return a + b;
};
module.exports = sum;
