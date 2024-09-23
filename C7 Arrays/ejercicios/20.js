function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let iguales;
  let igual = array[0];
  for(i=0; i<array.length; i++){
    if(igual === array[i]){
      iguales = true;
    } else {
      iguales = false;
      break;
    }
  }
  return iguales;
}

module.exports = todosIguales;
