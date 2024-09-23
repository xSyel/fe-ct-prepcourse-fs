function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let encontrar = [];
  if(numeros.length > 0){   
    for(let i=0; i<numeros.length; i++){
      if(encontrar.includes(numeros[i])){
        return numeros[i];
      } else {
        encontrar.push(numeros[i]); 
      }
    }
  }
}


module.exports = encontrarElementoRepetido;