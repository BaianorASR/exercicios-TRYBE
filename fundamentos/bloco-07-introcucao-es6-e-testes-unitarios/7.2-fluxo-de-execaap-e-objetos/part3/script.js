const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// add nova key ou reatribui
const addNigthTurn = (obj, key, value) => {
  obj[key] = value;
  // console.log(lesson2)
};
addNigthTurn(lesson2, 'turno', 'noite');

// monstra as chaves do objeto
const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson1));

// conta o tamanho do objeto
const countLength = (obj) => Object.keys(obj).length;
// console.log(countLength(lesson2))

// mostra os valores do objeto
const getValue = (obj) => Object.values(obj);
// console.log(getValue(lesson1))

const allLesson = Object.assign({}, { lesson1, lesson2, lesson3 });

// conta o total de estudantes
const countEstudantes = () => {
  let count= 0;
  Object.keys(allLesson).forEach((key) => {
    count += allLesson[key].numeroEstudantes
  })
  console.log(`Numero total de alunos: ${count}`)
};
countEstudantes();

// pega o valor pelo index
const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const verifyPair = (obj, key, index) => {
  let isIgual = false
  Object.entries(obj).forEach((entry) => {
  entry[0] === key && entry[1] === index ? isIgual = true : isIgual = false;
  })
  return isIgual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false