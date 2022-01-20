import { books } from './obj.js';

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const someBookWasReleaseOnThe80 = () => books.some((item) => item.releaseYear > 1980);

console.log(someBookWasReleaseOnThe80());