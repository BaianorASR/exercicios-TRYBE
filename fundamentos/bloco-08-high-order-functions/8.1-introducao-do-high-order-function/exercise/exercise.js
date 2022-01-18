const newEmployees = () => {
  const employees = {
    id1: generateUser('Pedro Guerra'),
    id2: generateUser('Luisa Drumond'),
    id3: generateUser('Ccarla Paiva'),
  }
  return employees;
};

const generateUser = (name) => ({ name, email: `${name.toLowerCase().split(' ').join('_')}@trybe.com` })

console.log(newEmployees())