import { books } from './books.js';

function longestNamedBook() {
  return books.reduce((acc, e)=> {
    return e.name.length > acc.name.length ? e : acc
  })
}
console.log(longestNamedBook())
export { longestNamedBook }