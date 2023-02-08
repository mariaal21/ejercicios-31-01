/*Solicita al usuario tres números enteros e indícale cuál es el menor. */

function ejercicio1() {

    var n = parseInt(window.prompt("inserta un numero"));
    var n2 = parseInt(window.prompt("insterta un numero diferente"));
    var n3 = parseInt(window.prompt("inserta un tercer numero diferente"));

    /*primer comprobacion del primer numero con los demas*/
    if (n < n2 && n < n3) {
        console.log("numero menor");
        alert(n + " numero menor")
    }
    /*Seguada comprobacion del segundo numero */
    else {
        if (n2 < n && n2 < n3) {
            console.log(n2 + " es menor")
        }
        /*Tercera comprobacion del tercer numero*/
        else {

            console.log(n3 + " es menor")

        }
    }
}



/*Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase. */
function ejercicio2(fr, letra, n) {

    fr = prompt("Inserta una frase:");
    letra = prompt("Inserta una letra:");
    n = 0;
    /*(inicia en 1=0; term )*/
    for (let i = 0; i < fr.length; i++) {
        if (fr[i] == letra) {
            n++;
        }
    }
    alert("la letra " + letra + " se repite " + n + " veces en la frase " + fr);

}



/*Suma o resta (según elija el usuario) dos números reales*/


function ejercicio3() {
    var n = parseFloat(prompt("inserta numero"));
    var n2 = parseFloat(prompt("insterta otro numero"));
    var sumaresta = prompt("introduce suma o resta escrito");

    if (sumaresta == "suma") {

        alert(n + n2);
    } else {
        if (sumaresta == "resta") {

            alert(n - n2);
        } else {

            alert("caracter no valido")
        }

    }
}



/*Almacena en dos variables datos de validacion (usuario y contrasena) correctos y permite 
que el usuario valide (dispone de 3 intentos)*/


function ejercicio4() {
    const usu = "Maria";
    const ct = "maria";
    let intentos = 0;

    do {
        var usuario = prompt('Introduce tu usuario');
        var contra = prompt('Introduce tu contrasena');
        intentos++;


    } while ((usuario != usu || contra != ct) && intentos < 3);

    if (intentos >= 3) {
        alert("Has excedido el número de intentos");
    } else {
        alert("correcto");
    }
}


function ejercicio5() {

    var letra = prompt("Insterta una letra");
    var a = "7";
    let b = "9";
    let c = "101";

    switch (letra) {
        case "a":
            alert(a);
            break;

        case "b":
            alert(b);
            break;

        case "c":
            alert(c);
            break;

        default:
            alert("no coincide");

    }
}

function ejercicio6() {

    let palbr = [i]

    for (let i = 0; i < palbr.length; i++) {
      for (let j = 0; j < palbr.length - i - 1; j++) {
        if (palbr[j] > palbr[j + 1]) {
          [palbr[j], palbr[j + 1]] = [palbr[j + 1], palbr[j]];
        }
      }
    }
    return palbr;
  
  
  palbr = ['casa', 'perros', 'comida', 'habitacion', 'jardin', 'hermanos', 'huerto'];
  alert(bubbleSort(words));
}