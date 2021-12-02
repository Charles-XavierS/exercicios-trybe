function maiorPalavra(caracteres) {
  let maiorPalavra = caracteres[0];
  for (let indice in caracteres) {
    if (maiorPalavra.length < caracteres[indice].length) {
      maiorPalavra = caracteres[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));