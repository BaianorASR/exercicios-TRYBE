const n = 5;
let triangulo = "";

for (index = 1; index <= n; index++) {
  for (let linha = n; linha >= 1; linha--) {
    if (linha <= index) {
      triangulo += "o";
    } else {
      triangulo += " ";
    }
  }
  console.log(triangulo);
  triangulo = "";
}
true;
