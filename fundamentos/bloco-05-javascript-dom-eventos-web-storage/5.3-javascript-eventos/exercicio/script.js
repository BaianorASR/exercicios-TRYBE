function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function criaFilho(paiEle, filhoEle, classe, i) {
  const filho = document.createElement(filhoEle);
  filho.className = classe;
  filho.innerText = i;
  const pai = document.querySelector(paiEle);
  pai.appendChild(filho);
}
let index = 5;
for (let i of dezDaysList) {
  // criaFilho('.week-days', 'li', 'days', i)

  if (i === 24 || i === 25 || i === 31) {
    criaFilho('.week-days', 'li', 'days holiday', i);
  } else if (
    dezDaysList.indexOf(i) == index + 7 ||
    dezDaysList.indexOf(i) == [5]
  ) {
    index = dezDaysList.indexOf(i);
    criaFilho('.week-days', 'li', 'days friday', i);
  } else {
    criaFilho('.week-days', 'li', 'days', i);
  }
}
