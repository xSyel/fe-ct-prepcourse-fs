function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumArray = 0;
  for(i=0; i<arrayOfNums.length; i++){
    sumArray += arrayOfNums[i];
  } 
  return sumArray;
}

module.exports = agregarNumeros;
