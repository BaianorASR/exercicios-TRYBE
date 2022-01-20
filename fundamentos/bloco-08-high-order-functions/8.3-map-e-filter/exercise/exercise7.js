import { books } from './books.js';

// * 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const regex = /^\w\.\s\w\.\s\w\.\s/g
const authorWith3DotsOnName = () => books.find((e) => regex.test(e.author.name)).name;

console.log(authorWith3DotsOnName());
