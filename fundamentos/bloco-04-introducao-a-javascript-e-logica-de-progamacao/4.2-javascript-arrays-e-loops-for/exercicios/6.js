let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = null;
for ( let index of numbers){
  if (index % 2 == 1){
    impar++
  }
}

if (impar <= 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("Tem "+impar+ " numeros impares");
}