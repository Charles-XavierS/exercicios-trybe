let angulo1 = 65;
let angulo2 = 100;
let angulo3 = -2;
let somaAngulos = angulo1 + angulo2 + angulo3;
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulosPositivos){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro');
}