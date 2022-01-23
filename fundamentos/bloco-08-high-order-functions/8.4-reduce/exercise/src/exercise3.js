import { books } from './books.js';

// * 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = () => books.reduce((acc, e) => acc + (e.releaseYear - e.author.birthYear), 0) / books.length;

console.log(averageAge());
export { averageAge }
