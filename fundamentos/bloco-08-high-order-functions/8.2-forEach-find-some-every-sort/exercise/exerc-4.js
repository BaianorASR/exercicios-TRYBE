import { books } from './obj.js';

// Ordene os livros por data de lançamento em ordem decrescente.
books.sort((a, b) => b.releaseYear - a.releaseYear)
console.log(books)