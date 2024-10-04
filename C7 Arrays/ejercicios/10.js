function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  /*
  for(var i=0: i < array.length; i++){
    if(array[i].length >= 5) return array[i]
    }

  array.filter(): crea un nuevo arreglo con las palabras que cumplen la condición
  var nuevoArreglo = array.filter(function(palabra){
    if(palabra.length >=5) return palabra
  })

  return nuevoArreglo[0]

  array.find(): retorna el pruimer valor que busca
  return array.find(function(palabra){
    if(palabra.length >= 5) return palabra
  })

  */
  for(i=0; i<array.length; i++){
    if(array[i].length >= 5){
      return array[i];
    }
  }
}

module.exports = obtenerPrimerStringLargo;
