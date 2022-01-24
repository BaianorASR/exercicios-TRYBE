const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;
// console.log(firstCountry); // Brazil

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ string, fn ] = saudacoes;
fn(string)
const arr = ['gato', 'agua', 'arroz'];
const [ animal, bebida, comida ] = arr
console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];