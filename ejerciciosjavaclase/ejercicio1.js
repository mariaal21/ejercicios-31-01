/*Solicita al usuario tres números enteros e indícale cuál es el menor. */

var n = window.prompt("inserta un numero");
var n2 = window.prompt("insterta un numero diferente");
var n3 = window.prompt("inserta un tercer numero diferente");

/*primer comprobacion del primer numero con los demas*/
if (n < n2 && n < n3) {
    console.log("numero menor");
    alert(n+" numero menor")
}  
/*Seguada comprobacion del segundo numero */
    else {
     if (n2 <n && n2<n3){
        console.log(n2+" es menor")  
    }
/*Tercera comprobacion del tercer numero*/
    else {
        if (n3<n && n3<n2) {
        console.log(n3+" es menor")
     } 
}
}