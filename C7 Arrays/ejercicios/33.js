function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let valor2 = str2;
  let valor3 = str3;
  let nuevoStr =[];
  let contar = 0;
  let longitud;
  str1.split("");

  if(str1.length > valor2.length && str1.length > valor3.length){
    longitud = str1.length;
  } else if(valor2.length > str1.length && valor2.length > valor3.length) {
    longitud = valor2.length;
  } else {
    longitud = valor3.length;
  }

  if(str1 === "" && valor2 === ""){
    do{
      nuevoStr.push(valor3[contar]);
      contar++;
    }while(contar<longitud);
    return nuevoStr.join('');
  } else if(str2 === "" || str3 === ""){
    if(valor2 === ""){
      valor3.split("");
      do{
        if(str1[contar] === ""){
          nuevoStr.push(valor3[contar]);
        } else if(valor3[contar] === ""){
          nuevoStr.push(str1[contar]);
        } else {
          nuevoStr.push(str1[contar])
          nuevoStr.push(valor3[contar]);
        }
        contar++;
      }while(contar<=longitud);
      return nuevoStr.join('');
    } else if(valor3 === ""){
      valor2.split("");
      do{
        if(str1[contar] === ""){
          nuevoStr.push(valor2[contar]);
        } else if(valor2[contar] === ""){
          nuevoStr.push(str1[contar]);
        } else {
          nuevoStr.push(str1[contar])
          nuevoStr.push(valor2[contar]);
        }
        contar++;
      }while(contar<=longitud);
      return nuevoStr.join('');
    }
  } else {
    valor2.split('');
    valor3.split('');
    do{
      if(str1[contar] !== ""){
        nuevoStr.push(str1[contar]);
      }
      if(valor2[contar] !== ""){
        nuevoStr.push(valor2[contar]);
      }
      if(valor3[contar] !== ""){
        nuevoStr.push(valor3[contar]);
      }
      contar++;
    }while(contar<longitud);
    return nuevoStr.join('');
  }
}
module.exports = combine;