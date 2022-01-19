import { books } from './obj.js';

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const getMostAgeAuthor = () => {
  books.find((item) => {
    if (item.author.birthYear === 1947) {
       console.log(item.author.name);
    }
  });
};

getMostAgeAuthor()