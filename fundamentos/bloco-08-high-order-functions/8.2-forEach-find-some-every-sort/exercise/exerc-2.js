import { books } from './obj.js';

// Retorne o nome do livro de menor nome.

const getBookName = () => {
  let last = null;
  books.forEach((item) => {
    const name = item.author.name;
    last === null ? (last = name) : false;
    name.length > last.length ? (last = name) : false;
  });
  console.log(last);
};

getBookName();
