let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index = 0; index < numbers.length; index ++) {
  if (numbers[index] % 2 !== 0) {
    impares += 1;
  }
}

if (impares === 0) {
  console.log("Não foi encontrado valores ímpares");
} else {
  console.log(impares);
}