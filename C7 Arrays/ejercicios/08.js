function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let indice = 0;
   if(array.includes(num)){
      for(i=0; i<array.length; i++){
         if(array[i] === num){
            indice = i;
            return indice;
         }
      }  
   } else {
      return -1;
   }
  
}

module.exports = encontrarElemento;
