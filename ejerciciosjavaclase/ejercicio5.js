
/*Solicita al usuario una letra, si inserta una a muestra el numero 7, si es una b, el 9,
si es una c el 101 y si no es ninguno de los tres, indicale que se ha equivocado de letra*/


var letra= prompt ("Insterta una letra");
var a="7";
let b="9";
let c="101";

switch (letra) {
    case "a":
        alert (a);
        break;

    case "b":
        alert (b);
        break;

    case "c":
        alert (c);
        break;
        
    default :
        alert("no coincide");
    
}