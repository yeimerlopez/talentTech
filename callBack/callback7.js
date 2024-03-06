const sum = (num1, num2) => {
    return num1 + num2
};

sum(1,3);
const resSum = sum(1,3);
console.log(resSum);
 

// Ejercicio 2

const sumar = (a, b, callback) => {
    callback((a + b)/100);
};

sumar(10, 20, (res) => {
    console.log(res);
    let respuesta = res;
    console.log(respuesta*100)
});

// Ejercicio 3

const hello = ( callback) => {
    callback();
};

const callbackFn = () => {
    console.log("hola mundo");
}

hello (callbackFn);

// Ejercicio 4
let pan = 500;
let leche = 200;

function comprar(articulo1, articulo2, callback) {
    let total = (articulo1 + articulo2);
    callback(total);
}

function imprimirFactura(precioTotal) {
    console.log(`tu compra tiene un total de ${precioTotal} `);
}

comprar(pan, leche, imprimirFactura);