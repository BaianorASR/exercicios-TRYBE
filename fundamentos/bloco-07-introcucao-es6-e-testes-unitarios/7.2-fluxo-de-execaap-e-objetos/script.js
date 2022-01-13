const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const printNivel = (obj) => {
  let string = ''
  Object.keys(obj).forEach((key) => {
    string += `${key}, Nível: ${obj[key]}\n`;
  });
  console.log(`${string}`);
}

printNivel(student1);
printNivel(student2);