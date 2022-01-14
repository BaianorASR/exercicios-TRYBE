const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

const myRemove = (arr, item) => {
  if (!arr.includes(item)) {
    return arr;
  }
  arr.splice(arr.indexOf(item), 1);
  return arr;
};

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') {
    return false;
  }
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
};
