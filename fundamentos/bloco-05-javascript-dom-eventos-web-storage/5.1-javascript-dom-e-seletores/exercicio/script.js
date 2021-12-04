/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
########Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
########Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        Crie uma função que mude a cor do quadrado vermelho para branco.
        Crie uma função que corrija o texto da tag <h1>.
        Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const paragrafoDoMeio = window.document.getElementsByTagName('p')[1];
function prevision(element) {
  element.innerText =
    'No prazo de dois anos eu quero finalmente ter uma estabilidade, e quem sabe trabalhando na Crunchyroll';
}
prevision(paragrafoDoMeio);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const yellowBlock = document.getElementsByClassName('main-content');
function changeMainColor(element) {
  for (let i in element) {
    element[i].style.backgroundColor = 'rgb(76,164,109)';
  }
}
changeMainColor(yellowBlock);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

<main class="main-content">
<section class="center-content">
  <p>Texto padrão do nosso site</p>
  <p>-----</p>
