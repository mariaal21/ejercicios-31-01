6
/*Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja*/ 


function bubbleSort(palbr) {
    for (let i = 0; i < palbr.length; i++) {
      for (let j = 0; j < palbr.length - i - 1; j++) {
        if (palbr[j] > palbr[j + 1]) {
          [palbr[j], palbr[j + 1]] = [palbr[j + 1], palbr[j]];
        }
      }
    }
    return palbr;
  }
  
  let words = ['casa', 'perros', 'comida', 'habitacion', 'jardin', 'hermanos', 'huerto'];
  alert(bubbleSort(words));