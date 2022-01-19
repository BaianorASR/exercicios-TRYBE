const newEmployees = () => {
  const employees = {
    id1: generateUser('Pedro Guerra'),
    id2: generateUser('Luisa Drumond'),
    id3: generateUser('Ccarla Paiva'),
  };
  return employees;
};

const generateUser = (name) => ({ name, email: `${name.toLowerCase().split(' ').join('_')}@trybe.com` });

// console.log(newEmployees())

const checkSorteio = (number, myNumber) => number === myNumber;
const sorteio = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1)
  return callback(number, myNumber) ? 'Parabéns, você ganhou' : 'Que pena :( continue tentando'
}

console.log(sorteio(2, checkSorteio))

const checkNota = (gabarito, studMark) => {
  let count = 0;
  for (index = 0; index <= studMark.length - 1; index++) {
    if (studMark[index] === 'N.A') {
      count += 0;
    } else if (studMark[index] === gabarito[index]) {
      count += 1;
    } else {
      count += 0.5;
    }
  }
  return count;
};
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const analisePoints = (gabarito, studMark, callback) => {
  console.log(callback(gabarito, studMark));
};

analisePoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkNota);
