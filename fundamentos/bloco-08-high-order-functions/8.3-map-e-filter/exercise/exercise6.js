import { books } from './books.js';

// * 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = () => books.filter((e) => 2022 - e.releaseYear >= 60).map((e) => e.name);

console.log(oldBooks())