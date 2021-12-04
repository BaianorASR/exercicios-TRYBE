// ########## Cons capturando os element #########
const tagsP = document.getElementsByTagName('p');
const yellowBlock = document.getElementsByClassName('main-content');
const meio = document.getElementsByClassName('center-content');
const titulo = document.getElementsByTagName('h1');
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ############ Functions do exercicio ###############
function prevision(element) {
  element[1].innerText =
    'No prazo de dois anos eu quero finalmente ter uma estabilidade, e quem sabe trabalhando na Crunchyroll';
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function changeMainColor(element) {
  element[0].style.backgroundColor = 'rgb(76,164,109)';
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function changeMiddleContent(element) {
  element[0].style.backgroundColor = 'white';
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function changeTitle(title) {
  title[0].innerText = 'Exercício 5.1 - JavaScript';
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function pUpperCase(element) {
  for (let key of element) {
    key.style.textTransform = 'uppercase';
  }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function showConsole(element) {
  for (let tag of tagsP) {
    console.log(tag.innerText);
  }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
prevision(tagsP);
changeMainColor(yellowBlock);
changeMiddleContent(meio);
changeTitle(titulo);
pUpperCase(tagsP);
showConsole(tagsP);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
  1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  3. Crie uma função que mude a cor do quadrado vermelho para branco.
  4. Crie uma função que corrija o texto da tag <h1>.
  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/