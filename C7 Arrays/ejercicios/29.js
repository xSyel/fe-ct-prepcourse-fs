function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let encontrar = numeros[0];
  if(numeros.length > 0){
    for(let i=0; i<numeros.length; i++){
      if(encontrar !== numeros[i]){
        return encontrar;
      }
      encontrar++;
    }
  }
  return null;
}


module.exports = encontrarNumeroFaltante;