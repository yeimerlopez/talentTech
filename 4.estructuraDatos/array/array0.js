let lista = ["nombre", 7485, "direccion"];

// metodo push para agregar elementos al final del array
lista.push("ciudad");
console.log(lista);

// metodo unshift para agregar elementos al principio del array
lista.unshift("codigo");
console.log(lista);

// forma de imprimir uno  de los elementos del array por su indice
console.log(lista[1]);

// length para saber cuantos elementos tiene el array
console.log(lista.length);

/**Metodo slice
 * recibe dos argumentos, el primero es el indice inicial y el segundo el indice final si incluirlo
 * recordar en calculo [x, x, x, ) abierto a la derecha
 * y nos sirve para extraer elementos de un array
 */
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22];

const nuevoArray = numeros.slice(1, 8);
console.log(nuevoArray);

/***
 * metodo pop para eliminar el ultimo elemento de un array
 */

const deleteLast = numeros.pop();
console.log(deleteLast);
