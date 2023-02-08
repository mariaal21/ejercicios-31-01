let n = parseInt(prompt("Pon un numero"));

console.log("El número de cifras es: " + numeros(n));

/* hacemos una funcion con un while para que se cumpla la condicion de que hasta que el resto 
no sea >0  */
function numeros(n) {
    let cifras = 0;
    if (n === 0) {
      return 1;
    }
    while (n > 0) {
      n = (n - (n % 10)) / 10;
      cifras++;
    }
    return cifras;
  }

