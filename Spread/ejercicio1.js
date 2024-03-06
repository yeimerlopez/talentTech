// const arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arreglo2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


// console.log(arreglo1, arreglo2)

// const newArray = [...arreglo1, ...arreglo2];
// console.log(newArray);


// const operador  = [1, 2, 3, 4, 5, ];
// let copiaOperador = operador;

// copiaOperador[0] = 0;

// console.log(operador);
// console.log(copiaOperador);


// const listNumbers = [1, 2, 3, 4, 5];

// const listNumbers2 = [ 6, 7, 8, 9, 10];

// console.log(listNumbers.concat(listNumbers2));


const listNumbers3 = [1, 2, 3, 4, 5];

const listNumbers4 = [ 6, 7, 8, 9, 10];

console.log([0,...listNumbers3, "holaMundo",...listNumbers4,3,5,9]);

const user = {
    nombre: "Yeimer",
    apellido: "Diaz",
    edad: 35

}

let user2 = {...user};
user2.apellido = "Lopez";
console.log(user)
console.log(user2)
