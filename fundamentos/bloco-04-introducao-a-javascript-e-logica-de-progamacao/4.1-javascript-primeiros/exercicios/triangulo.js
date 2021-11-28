const ladoA = 32;
const ladoB = 64;
const ladoC = 73;

let isTriangulo = ladoA + ladoB + ladoC;

if (isTriangulo < 0) {
  console.log("error");
} else if (isTriangulo >= 180) {
  console.log(true);
} else {
  console.log(false);
}

