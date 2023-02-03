let frutas = ["Manzana", "Banana" ];

console.log(frutas); // Manzana y Banana 

console.log(frutas.length); // 2

let primero = frutas[0] // Manzana  

let ultimo = frutas[frutas.length - 1]; // Banana

let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]

ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]


function add () {

    console.log(frutas); //cuantas frutas hay
    let nuevaLongitud = frutas.push('Naranja');
    alert("Fruta añadida");
}

function del() {
    ultimo = frutas.pop();
    console.log(frutas);
    alert("adiosfruta");
}