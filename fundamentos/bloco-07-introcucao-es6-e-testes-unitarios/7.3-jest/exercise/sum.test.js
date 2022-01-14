const sum = require('./sum');

it('som de 4 + 5 é 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('sum 0 + 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('catch error if string is passed as parameter', () => {
  expect(() => sum(4, '5')).toThrow();
})