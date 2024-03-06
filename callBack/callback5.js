

const operation = (num1, num2, op) => {
    return op(num1, num2)
}


console.log(operation( 10, 20, (num1, num2) => num1 + num2 ))
console.log(operation( 10, 50, (num1, num2) => num1 + num2 ))
operation( 10, 25, (num1, num2) => num1 + num2 )


//Ejemplo 2 

//Parte1

function mensaje(nombre){
    console.log(`Hola ${nombre}`)
}

mensaje("Carlos");

//Parte2

function imprimir(){
    console.log("yo soy la funcion imprimir");
}

function mensaje2(callback){

    setTimeout(() => {
        mensaje = callback();
        console.log(`mi nombre es ${mensaje}`);
    }, 2000);
   
   
}

mensaje2(imprimir);

