const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contar = 0;
  for(propiedad in objeto){
    contar++;
  }
  return contar;
};

module.exports = contarPropiedades;
