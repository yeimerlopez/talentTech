
// Funcion con un valor por defecto
let sumar = function (parametro1, parametro2 = 5){
    return parametro1 + parametro2;
}
console.log(sumar(10));


// Funcion cuando el primer parametro  es por defecto pero no deseamos enviarlo se debe poner undefine
let restar = function (parametro1 = 10, parametro2){
    return parametro1 - parametro2;
}
console.log(restar(undefined, 20))
