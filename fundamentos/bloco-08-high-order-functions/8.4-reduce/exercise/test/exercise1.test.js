import all from '../src/exercise1.js';
const { flatten, arrays } = all;

it('transforma matriz em array', () => {
  for (let i of flatten(arrays)) {
    expect(Array.isArray(i)).toBeFalsy()
  }
})