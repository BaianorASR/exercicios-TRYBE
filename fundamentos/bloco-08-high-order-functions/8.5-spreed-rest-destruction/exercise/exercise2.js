/*
  * 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest .
*/

const sum = (...args) => args.reduce((acc, e) => acc + e, 0)
console.log(sum(2, 3, 7, 6, 1, 8, 4));
