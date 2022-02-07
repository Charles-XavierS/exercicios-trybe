let n = 10;
let colunas = '';
let simbolo = '*'
let posicao = n;

for (let index = 0; index < n; index += 1) {
  for (let indexCol = 0; indexCol <= n; indexCol += 1) {
    if (indexCol < posicao) {
      colunas = colunas + ' ';
    } else {
      colunas = colunas + simbolo;
    }
  }
  console.log(colunas);
  colunas = '';
  posicao -= 1;
};