function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  for(const prop in objeto){
    if(prop === propiedad){
      return true;
    }
  }
  return false;
}

module.exports = tienePropiedad;
