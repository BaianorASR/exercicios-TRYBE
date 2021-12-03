function isPalindrome(palavra) {
  let aux = [];
  for (let key of palavra) {
    aux.unshift(key);
  }

  if (palavra.toLowerCase === aux.toLowerCase) {
    return true;
  } else {
    return false + '!! ' + palavra + ' não é palindromo';
  }
}

console.log(isPalindrome('Acerola'));

// #############################
let numeros = [27, 3, 1, 7, 10, 46];

function bigIndex(array) {
  let aux = null;
  for (let index = 0; index < array.length; index += 1) {
    if (index == 0) {
      aux = index;
    } else if (array[index] > array[aux]) {
      aux = index;
    }
  }
  return aux;
}

console.log(bigIndex(numeros));

// ########################

function lowIndex(array) {
  let aux = 0;
  for (let key of array) {
    if (key < array[aux]) {
      aux = array.indexOf(key);
    }
  }
  return aux;
}

console.log(lowIndex(numeros));

// #########################

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigName(name) {
  let maiorNome = '';
  for (let key of name) {
    if (key.length > maiorNome.length) {
      maiorNome = key;
    }
  }
  return maiorNome;
}
console.log(bigName(names));

// ######################

const numbers = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedNumber(array) {
  let aux = null;
  let auxNumber = {};

  return auxNumber;
}
console.log(mostRepeatedNumber(numbers));

// #################################
const n = 5;
function somandoNumeros(number) {
  let aux = [];
  let soma = 0;
  for (let index = 1; index <= number; index += 1) {
    aux.push(index);
    soma += index;
  }

  return aux.join('+') + '=' + soma;
}

console.log(somandoNumeros(n));
// #########################################
const word = 'trybe';
const ending = 'be';
const