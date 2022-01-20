import { books } from './obj.js';

// Encontre o primeiro livro cujo nome possui 26 caracteres.
  const livro = books.find((item) => item.name.length === 26);
  console.log(livro)
