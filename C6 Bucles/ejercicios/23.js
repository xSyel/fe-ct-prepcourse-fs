function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var numeroAVerificar = numero;
  var contador = 0;
  if(numero <= 1){
    return false;
  } else {
    for(i=1; i<= numero; i++){
      //console.log(`resto: ${numero % i}, division: ${numero/i}`)
      if(numero % i === 0){
        contador++;
        //console.log(`contador: ${contador}`)
      }
    }
    if(contador === 2){
      return true;
    } else {
      return false;
    }
  }
}
module.exports = esNumeroPrimo;
