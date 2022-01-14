const { sum, myRemove, myFizzBuzz } = require('./functions');

describe('test sum function', () => {
  it('som de 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('sum 0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('catch error if string is passed as parameter', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('error messas is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});

describe('test myRemove function', () => {
  it('passed the array [1, 2, 3, 4], the return not contain 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('passed the array [1, 2, 3, 4], not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('passed the array [1, 2, 3, 4], the return is equal', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('test myFizzBuzz', () => {
  it('passed 15 the return is "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })

  it('passed 18 the return is "fizz"', () => {
    expect(myFizzBuzz(18)).toMatch('fizz');
  })

  it('passed 35 the return is "buzz"', () => {
    expect(myFizzBuzz(35)).toMatch('buzz');
  })
})