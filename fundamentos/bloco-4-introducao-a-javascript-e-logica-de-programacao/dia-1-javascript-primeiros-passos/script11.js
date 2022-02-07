let inss;
let impostoRenda;

const salarioBruto = 7000.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

const baseSalarial = salarioBruto - inss;

if (baseSalarial <= 1903.98) {
  impostoRenda = 0;
} else if (baseSalarial <= 2826.65) {
  impostoRenda = (baseSalarial * 0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
  impostoRenda = (baseSalarial * 0.15) - 354.80;
} else if (baseSalarial <= 4664.68) {
  impostoRenda = (baseSalarial * 0.225) - 636.13;
} else {
  impostoRenda = (baseSalarial * 0.275) - 869.36;
};

console.log(baseSalarial - impostoRenda);