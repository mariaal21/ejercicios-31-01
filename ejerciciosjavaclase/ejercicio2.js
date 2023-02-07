/*Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase. */
var fr = prompt("Inserta una frase:");
var letra = prompt("Inserta una letra:");
var n=0;
/*(inicializacion/desde; condición/hasta ; incremento/decremento/de cuanto en cuanto)*/
/*(inicia en 1=0; term )*/
for (let i=0 ;i<fr.length ;i++){
    if(fr[i]==letra){
        n++;
    }
}
alert("la letra "+letra+" se repite "+n+" veces en la frase "+fr);