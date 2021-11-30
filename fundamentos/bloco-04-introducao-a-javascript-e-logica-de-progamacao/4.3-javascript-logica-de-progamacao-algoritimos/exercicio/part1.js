const n = 3;

let square = "";

for (let i = 1; i <= n; i++) {

  for (let index = 1; index <= n; index++) {
    square += "*"
  }
  
  console.log(square);
  square = "";
}