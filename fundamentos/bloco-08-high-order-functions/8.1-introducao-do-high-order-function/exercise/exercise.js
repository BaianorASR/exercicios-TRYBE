const newEmployees = () => {
  const employees = {
    id1: generateUser('Pedro Guerra'),
    id2: generateUser('Luisa Drumond'),
    id3: generateUser('Ccarla Paiva'),
  }
  return employees;
};

const generateUser = (name) => ({ name, email: `${name.toLowerCase().split(' ').join('_')}@trybe.com` })

// console.log(newEmployees())


const checkSorteio = (aposta, sortNumbers) => {
  const sortAp = [... aposta].sort();
  const sortNb = [... sortNumbers].sort();
  let count = 0;
  for (let index = 1; index <= 6; index++) {
    sortAp[index] === sortNb? count += 1 : count += 0; 
  }
  console.log(sortNb);
  console.log(sortAp);
  console.log(count);
  return count 
}

const resultadoSorteio = (aposta, callback) => {
  const sortNumbers = []
  for (let index = 1; index <= 6; index += 1){
    sortNumbers.push(Math.floor(Math.random() * 60 + 1));
  }
  
  return callback(aposta, sortNumbers) === 6? "Você Ganhou" : "Que pena! tente novamente"
  
}

console.log(resultadoSorteio([1,2,3,4,5,6], checkSorteio))