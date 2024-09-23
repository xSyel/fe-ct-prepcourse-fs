function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multIndice = [];
  for(i=0; i<array.length; i++){
    multIndice.push(array[i]*i);
  }
  return multIndice;
}

module.exports = multiplicarElementosPorIndice;
