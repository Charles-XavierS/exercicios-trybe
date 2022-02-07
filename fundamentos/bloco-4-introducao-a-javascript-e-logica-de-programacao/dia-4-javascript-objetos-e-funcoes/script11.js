function maior(num) {
  let indiceMaior = 0;
  for (let index in num) {
    if (num[indiceMaior] > num[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(maior([2, 4, 6, 7, 10, 0, -3]));