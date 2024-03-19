

let arreglo = [1,2,3,4,5,6,7,8,9,10];

function busquedaBinaria(array, derecha, izquierda, valor){
    if(derecha > izquierda) return -1;
    let mitad = Math.floor((derecha + izquierda) / 2);
    if(array[mitad] === valor) return mitad;
    if(array[mitad] < valor) return busquedaBinaria(array, derecha, mitad + 1, valor);
    if(array[mitad] > valor) return busquedaBinaria(array, mitad - 1, izquierda, valor);
}