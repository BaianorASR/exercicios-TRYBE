import { books } from './books.js';

// * 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldBooksOrdered = () => books.filter((e) => 2022 - e.releaseYear >= 60).sort((a, b) => a.releaseYear - b.releaseYear)

console.log(oldBooksOrdered())