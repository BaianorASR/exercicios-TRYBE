const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// & 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const containsA = () => names.join('')
.toLowerCase()
.split('').
reduce((acc, letter) => letter === 'a' ? acc += 1: acc, 0)

export { containsA }