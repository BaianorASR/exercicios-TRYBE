import { reduceNames } from '../src/exercise2';

it('Testa se a str cotem o nome de todos os autores', () => {
  expect(reduceNames()).toBe('George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.')
})