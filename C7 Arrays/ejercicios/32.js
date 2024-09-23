function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
 let compara = [];
 let longitud = compara.length;
 string.split('');

 for(let i=0; i<string.length; i++){
  compara.unshift(string[i]);
 }

 for(let i=0; i<string.length; i++){
  if(string[i] !== compara[i]){
    return false;
  } else {
    return true;
  }
 }
}

module.exports = esPalindromo;