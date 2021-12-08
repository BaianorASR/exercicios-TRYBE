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

// // Escreva seu código abaixo.
// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

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
  if (i === 25) {
    criaFilho('#days', 'li', 'days holiday friday', i);
  } else if (i === 24 || i === 31) {
    criaFilho('#days', 'li', 'days holiday', i);
  } else if (
    dezDaysList.indexOf(i) == index + 7 ||
    dezDaysList.indexOf(i) == [5]
  ) {
    index = dezDaysList.indexOf(i);
    criaFilho('#days', 'li', 'days friday', i);
  } else {
    criaFilho('#days', 'li', 'days', i);
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function btnIn(string) {
  criaFilho('.buttons-container', 'button', 'btn-friday', string);
}
btnIn('Feriados');
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const buttonFeriado = document.querySelector('.btn-friday');
let altCor = false;
buttonFeriado.addEventListener('click', function () {
  let daysFeriado = document.querySelectorAll('.holiday');
  if (altCor == true) {
    for (let i of daysFeriado) {
      i.style.backgroundColor = 'navy';
      altCor = false;
    }
  } else {
    for (let i of daysFeriado) {
      i.style.backgroundColor = 'rgb(238,238,238)';
      altCor = true;
    }
  }
});
