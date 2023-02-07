3
/*Suma o resta (según elija el usuario) dos números reales*/

var n =parseInt( prompt("inserta numero"));
var n2= parseInt(prompt ("insterta otro numero"));
var sumaresta = prompt("introduce suma o resta escrito");

if (sumaresta == "suma"){

    alert(n+n2);
} else {
    if (sumaresta == "resta"){

        alert(n-n2);
}
}
