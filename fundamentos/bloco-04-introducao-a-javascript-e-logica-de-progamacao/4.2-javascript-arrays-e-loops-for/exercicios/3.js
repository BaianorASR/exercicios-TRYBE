let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = null;
let media = null;

for( let i of numbers) {
  soma += i
}

media = soma / numbers.length

console.log(media);