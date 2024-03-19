const nombres = [
  "camilo",
  "pedro",
  "juan",
  "maria",
  "carlos",
  ["pedro2", "juan2", ["maria3", "carlos3"]],
];
console.log(nombres[5][2][1]);
console.log(nombres);

/** Otra forma de crear un array es con el constructor Array de JS   */
const ciudades = Array.of("bogota", "medellin", "cali");
console.log(ciudades);

/**
 * Forma de crear un array con fill [Rellenar]
 * @param primerParametro  es el valor con el que quiero llenar el array
 * @param segundoParametro es el indice inicial
 * @param terceroParametro es el indice final recordarque es abierto a la derecha
 */

// Ejemplo1

const arrayPrueba = [1, 1, 1, 1, 1, 1];
console.log(arrayPrueba.fill(0));
console.log(arrayPrueba.fill(1, 2));
console.log(arrayPrueba.fill("amor", 2, 4));

// Ejemplo2
const ciudades2 = Array(5).fill("bogota");
console.log(ciudades2);

const fruits = ["apple", "banana", "orange", "pineapple"];

///*************  forEach  ******************

/** Como recorrer un array con forEach
 * @param item es el elemento del array
 * @param index es el indice del elemento del array*
 */
fruits.forEach(function (item, index) {
  console.log(index, item);
});

//traer el primero y el ultimo elemento del array
let firstElement = fruits[0];
console.log(`the first element is ${firstElement}`);

let lastElement = fruits[fruits.length - 1];
console.log(`the last element is ${lastElement}`); 
