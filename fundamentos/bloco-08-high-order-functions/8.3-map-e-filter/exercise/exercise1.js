import { books } from './books.js';

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = () => books.map(item => `${item.name} - ${item.genre} - ${item.author.name}`)

console.log(formatedBookNames())