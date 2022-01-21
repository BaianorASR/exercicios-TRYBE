import { books } from './books.js';

// * 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const fantasyOrScienceFiction = () => books.filter((element) => element.genre === "Fantasia" || element.genre === 'Ficção Científica');

console.log(fantasyOrScienceFiction());