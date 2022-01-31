const list = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
];

function getFirstPython(list) {
  const temDevPython = list.some(({ language }) => language === 'Python');
  let saida = `There will be no Python developers`;
  if (temDevPython === true) {
    list.forEach((devPython) => {
      if (devPython.language === 'Python') saida = `${devPython.firstName}, ${devPython.country}`;
    });
  }
  return saida;
}

function getFirstPython(list) {
  const first = list.find(({ language }) => language === 'Python');
  return first ? `${first.firstName}, ${first.country}` : "There will be no Python developers"
}

console.log(getFirstPython(list));
