let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

tasksList.push("Fazer exercícios da Trybe"); // adiciona mais uma tarefa
tasksList.unshift("Escovar os dentes");
tasksList.pop(); // remove o ultimo item
tasksList.shift(); // remove o primero item
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
// .pop() #remove o ultimo item do array||| .shift() remove o ultimo item do array

let indexOfTask = tasksList.indexOf("Tomar café");
console.log(indexOfTask);
// 1
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);
// ##################
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);
// ############
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");
console.log(menu);
