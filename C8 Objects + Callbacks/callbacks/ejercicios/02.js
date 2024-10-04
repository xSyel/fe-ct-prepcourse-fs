function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   if(callback === undefined || callback === null){
      return string;
   } else {
      return callback(string);
   }
}
/*
if(typeof callback !== "function") return string
else retrun callback(string)
*/
module.exports = cambiarCadena;
