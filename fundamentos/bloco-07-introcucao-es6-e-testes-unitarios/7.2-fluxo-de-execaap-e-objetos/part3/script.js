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

const addNigthTurn = (obj, key, value) => {
  obj[key] = value;
  // console.log(lesson2)
}
addNigthTurn(lesson2, 'turno', 'noite');

const listKeys = obj => Object.keys(obj);
// console.log(listKeys(lesson1));