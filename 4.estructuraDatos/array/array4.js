const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/**Como recorrer un array con forEach */
numbers.forEach((num, index) => {
  console.log(index, num );
});


/** Como recorrer un array con forEach en una sola linea de codigo  */

const  marcasVehiculos = ["audi", "bmw", "ford", "kia"];

marcasVehiculos.forEach(marca => console.log(`la marca es ${marca}`))


/** Como recorrer un array con forEach en una sola linea de codigo + condicion */
const frutas = ["manzana", "pera", "fresa", "naranja", "sandia"];

const res = frutas.filter(value => {if(value.length >= 5)console.log("la fruta es:", value)});
const res2 = frutas.filter(value => value.length >= 5);
console.log(res2)


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

pares = [];
impares = [];

numeros.forEach(num => {
  if(num % 2 === 0){
    pares.push(num);
  }else{
    impares.push(num);
  }
});

console.log(`pares: ${pares}`);
console.log(`ìmpares: ${impares}`);

/** Extraer elementos impares de un array con filter */
imparesConFilter = numeros.filter(value => value % 2 !== 0);
console.log(imparesConFilter)

//** Extraer elementos pares de un array con filter y funcion ano */

const resultado = numeros.filter(fabricaImpares);

function fabricaImpares(num){
  return num % 2 === 0
}

console.log(resultado)