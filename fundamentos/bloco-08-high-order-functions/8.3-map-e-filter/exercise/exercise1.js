import { books } from './books.js';

// * Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

export const formatedBookNames = () => books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);
