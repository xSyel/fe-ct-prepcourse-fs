function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indice = 0;
  let mayor = array[0];
  if(array.length <= 1){
    return 0;
  }else{
    for(i=0; i<array.length; i++){
      if(mayor < array[i]){
        mayor = array[i];
        indice = i;
      }
    }
  }
  return indice;
}
module.exports = encontrarIndiceMayor;
