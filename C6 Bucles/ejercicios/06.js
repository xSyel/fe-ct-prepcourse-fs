function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num > 99 && num < 1000;

  /*
  if(num.toString().length === 3) return true
  else return false
  */
}

module.exports = tieneTresDigitos;
