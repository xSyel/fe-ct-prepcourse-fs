function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var esPotencia = 1;
  while(esPotencia < numero){
    esPotencia*=2;
    if(esPotencia === numero){
      return true;
    }
  }
  return false;
}

module.exports = esPotenciaDeDos;
