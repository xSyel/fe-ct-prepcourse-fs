function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let elemento;
  let arreglo = [];
  for(let i=0; i<array.length; i++){
    elemento = cb(array[i]);
    arreglo.push(elemento);
  }
  return arreglo;
}

module.exports = map;
