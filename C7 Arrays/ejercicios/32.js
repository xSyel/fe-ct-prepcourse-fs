function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
 let compara = [];

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

 /*
 var textoVolteao = ""
 for(let i = string.length - 1; i >= 0; i--){
  textoVolteao = textoVolteao + string[i]
 }

 if(string === textoVolteao) return true 
 else return false

 var i = 0
 var j = string.length - 1
 while( i < j){
  if(string[i] !== string[j]) return false 
  else {
    i++
    j--
  }

  return true

  return string === string.split("").recerse(.join(""))
 }
 */
}

module.exports = esPalindromo;