let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNum = numbers[0];

for (let index = 1; index < numbers.length; index ++) {
  if (numbers[index] > maiorNum) {
    maiorNum = numbers[index];
  }
}

console.log(maiorNum);