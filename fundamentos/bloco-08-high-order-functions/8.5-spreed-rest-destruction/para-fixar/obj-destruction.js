// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller: vendas }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${vendas}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//"Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const employee = { ...user, ...jobInfos }

const fraseCreate = ({ name, age, nationality, profession, squad, squadInitials
}) => `Hi, my name is ${name}, I'm ${age}, years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(fraseCreate(employee));