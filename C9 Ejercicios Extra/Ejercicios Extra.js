/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglo = [];
  for(var propiedad in objeto){
    arreglo.push([propiedad, objeto[propiedad]]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var contador = 0;
  var stringArray = string.split("").sort();
  var letra = "";
  var objeto = {};

  while(contador < stringArray.length){
    letra = stringArray[contador];
    objeto[letra] = stringArray.filter(valor => valor === letra).length;
    contador++;
  }
  return objeto;
  /*
  var stringOrdenado = string.split("").sort().join("")
  var objetoFinal = {}

  for(var i = 0; i<stringOrdenado.length; i++){
    if(objetoFinal[stringOrdenado[i]] === undefined){
    objetoFinal[stringOrdenado[i]] = 1}
    else objetoFinal[stringOrdenado[i]] = objetoFinal[stringOrdenado[i]] + 1
  }
  
  return stringOrdenado
  */
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var nuevoString = "";
  var minsuculas = "";
  for(var i=0; i<string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      nuevoString += string[i];
    } else {
      minsuculas += string[i];
    }
  }
  nuevoString += minsuculas;
  return nuevoString;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arrayPalabras = frase.split(" ")
  var textReverse = ""
  for(var i=0; i<arrayPalabras.length; i++){
    textReverse = textReverse + arrayPalabras[i].split("").reverse().join("") + " "
  }
  return textReverse.trim()
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var str = numero.toString();
  var strReverse = str.split('').reverse().join('')
  if(str === strReverse){
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var nuevoStr = "";
  for(var i=0; i<string.length; i++){
    if(string[i]!=="a" && string[i]!=="b" && string[i]!=="c"){
      nuevoStr += string[i];
    }
  }
  return nuevoStr;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b)=>a.length - b.length); //¿? o.o
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var nuevoArreglo = [];
  for(var i=0; i<array1.length; i++){
    for(var j=0; j<array2.length; j++){
      if(array1[i] === array2[j]){
        nuevoArreglo.push(array1[i]); 
      }
    }
  }
  return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
