function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador = 0;
  for(i=0; i<array.length; i++){
    if(array[i]>10){
      contador++;
    }
  }
  return contador;
}

module.exports = contarElementosMayoresA10;
