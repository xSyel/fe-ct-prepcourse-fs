function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = [];
  
  for(i=0; i<array.length; i++){
    switch(array[i]){
      case 'Enero':
        meses.push('Enero');
        break;
      case 'Marzo':
        meses.push('Marzo');
        break;
      case 'Noviembre':
        meses.push('Noviembre');
        break;
    }
  }

  if(meses.includes('Enero') && meses.includes('Marzo') && meses.includes('Noviembre')){
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
