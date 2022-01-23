import { books } from './books.js';

// * Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.map((e) => e.author.name).join(', ')+'.'
}

export { reduceNames };