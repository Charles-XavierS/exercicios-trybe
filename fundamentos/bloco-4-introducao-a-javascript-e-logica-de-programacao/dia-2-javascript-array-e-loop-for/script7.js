let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNum = numbers[0];

for (let index = 1; index < numbers.length; index ++) {
  if (numbers[index] < menorNum) {
    menorNum = numbers[index];
  }
}

console.log(menorNum);