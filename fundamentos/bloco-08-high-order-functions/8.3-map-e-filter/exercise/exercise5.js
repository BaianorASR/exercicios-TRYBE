import { books } from './books.js';

// * 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = () => books.filter((e) => e.genre === 'Fantasia' || e.genre === 'Ficção Científica').map((e) => e.author.name).sort()

console.log(fantasyOrScienceFictionAuthors());