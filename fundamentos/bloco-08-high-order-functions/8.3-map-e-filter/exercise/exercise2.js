import { books } from './books.js'

// * 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const nameAndAge = () => books.map((element) => ({ nome: `${element.author.name}`, age: `${element.releaseYear - element.author.birthYear}` })).sort((a, b) => a.age -b.age);

console.log(nameAndAge())