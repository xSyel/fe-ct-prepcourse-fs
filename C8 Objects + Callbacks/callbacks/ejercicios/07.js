function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   return arrayOfStrings.filter( function(palabra){
      if(palabra[0]=== "a") {
         return palabra;
      }
   })
}

module.exports = filter;
