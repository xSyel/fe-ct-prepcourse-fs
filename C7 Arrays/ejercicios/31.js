function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let invertir = [];
  texto.split(' ');
  for(let i=0; i<texto.length; i++){
    invertir.unshift(texto[i]);
  }
  return invertir.join('');
}

module.exports = invertirTexto;
