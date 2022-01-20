import { books } from './obj.js';

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(item => item.releaseYear > 2000);
}

console.log(everyoneWasBornOnSecXX())