// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Pera', 'Uva', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Goiaba', 'Manga', 'Acerola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional].join(', ')

console.log(fruitSalad(specialFruit, additionalItens));