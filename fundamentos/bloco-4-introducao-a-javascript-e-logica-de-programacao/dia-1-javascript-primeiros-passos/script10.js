const custoProduto = 15;
const valorDaVenda = 28;

if (custoProduto >= 0 && valorDaVenda >= 0) {
  const custoTotal = custoProduto * 1.2;
  const lucro = (valorDaVenda - custoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Error, os valores não podem ser negativos");
};