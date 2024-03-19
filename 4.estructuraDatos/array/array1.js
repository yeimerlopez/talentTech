// Definimos un array de nombres
const nombres = ["Juan", "María", "Carlos", "Ana"];

console.log(nombres);
console.log(nombres[2]);
// Iteramos sobre los elementos del array usando for...of
for (let nombre of nombres) {
  console.log(nombre);
}

// Iteramos sobre los índices del array usando for...in
for (let indice in nombres) {
  console.log(nombres[indice]);
}
