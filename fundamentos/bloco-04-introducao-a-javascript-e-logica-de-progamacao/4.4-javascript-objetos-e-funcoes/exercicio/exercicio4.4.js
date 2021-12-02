let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// #########################################

console.log('Part 01 >>>');
console.log('Bem-Vinda', info.personagem);

// ########################################

console.log('Part 02 >>>');
info.recorrente = 'Sim';
console.log(info);

// ####################################

console.log('Part 03 >>>');
for (let key in info) {
  console.log(key);
}

// #####################################

console.log('Part 04 >>>');
for (const key in info) {
  console.log(info[key]);
}

// #####################################
console.log('part 05 >>>');
let newInfo = {
  nome: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in newInfo) {
  console.log(key+":", newInfo[key]);
}

// #################################
// #################################
// #################################

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// #################################

console.log('part 06 >>>');
console.log("O livro favorito de " +leitor.nome+ " se chama '" +leitor['livrosFavoritos'][0]['titulo']+ "'")

// ################################

console.log('part 07 >>>');
leitor.livrosFavoritos.push( {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
})
console.log(leitor.livrosFavoritos);

// #################################

console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos")