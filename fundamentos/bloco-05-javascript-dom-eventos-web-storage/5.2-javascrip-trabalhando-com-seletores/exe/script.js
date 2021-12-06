// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag main com a classe main-content como filho da tag body ;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

function createElements(elementPai, elementChild, classes, texto) {
  const child = document.createElement(elementChild);
  if (classes != undefined) {
    child.className = classes;
  }
  if (texto != undefined) {
    child.innerText = texto;
  }
  const painho = document.querySelector(elementPai);
  painho.appendChild(child);
}

createElements('body', 'h1', null, 'JavaScript DOM'); // 1
createElements('body', 'main', 'main-content', null); // 2
createElements('main', 'section', 'center-content', null); //
createElements('.center-content', 'p', null, 'Mukate kuro no ka'); // 4
createElements('main', 'section', 'left-content', null); // 5
createElements('main', 'section', 'right-content', null); // 6
createElements('.left-content', 'img', 'image', null); // 7

document.querySelector('.image').src = 'https://picsum.photos/200'; // 7

const numeros = [
  'Um',
  'Dois',
  'Tres',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez',
];
for (let i of numeros) {
  if (numeros.indexOf(i) < 1) {
    createElements('.right-content', 'ul', 'listinhas', null); // 8
  }
  createElements('.listinhas', 'li', null, i);
  if (numeros.indexOf(i) < 3) {
    createElements('.main-content', 'h3', null, `Titulo ${i}`); // 9
  }
}
