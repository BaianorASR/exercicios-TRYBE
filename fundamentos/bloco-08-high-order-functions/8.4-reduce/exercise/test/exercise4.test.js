import { longestNamedBook } from '../src/exercise4';

it('encontre o livro com o maior nome', () => {
  expect(longestNamedBook()).toEqual({
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  });
});
