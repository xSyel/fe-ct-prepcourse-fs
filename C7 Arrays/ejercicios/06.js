function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var arrayInvertido = [];
  for(i=0; i<array.length; i++){
      arrayInvertido.unshift(array[i])
  }
  return arrayInvertido;
}

module.exports = invertirArray;
