function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma=0;
  for(i=0; i<=n; i++){
    suma += i;
  }
  return suma;
}

module.exports = sumarHastaN;
