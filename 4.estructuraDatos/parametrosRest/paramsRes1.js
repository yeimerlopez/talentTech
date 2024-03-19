// Ejemplo 1
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10



/**
 * Ejemplo 2
 * @param {*} numero1 
 * @param {*} numero2 
 * @param  {...any} otrosNumeros 
 * @returns la suma de todos los argumentos que se encuentran el la variableSuma
 */
function add(numero1, numero2, ...otrosNumeros) {
  let variableSuma = numero1 + numero2;
  otrosNumeros.forEach((elementArrayOtrosNumeros) => (variableSuma += elementArrayOtrosNumeros));
  return variableSuma
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Expected output: 55