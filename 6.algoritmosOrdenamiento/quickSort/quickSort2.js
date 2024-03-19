

function quickSort(arr) {
    let izq = [];
    let der = [];
    let pivote = arr.pop();
    let longitud = arr.length;
    let d = [];


    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < longitud; i++) {
        if (arr[i] < pivote) {
        izq.push(arr[i]);
        } else {
        der.push(arr[i]);
        }
    }

    return d.concat(quickSort(izq), pivote, quickSort(der));
}

let numeros = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(numeros);

let numerosOrga = quickSort(numeros);

clg(numerosOrga);
