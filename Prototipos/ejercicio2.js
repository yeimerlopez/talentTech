//funcion constructora
function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

// metodo fuera de la funcion constructora

Persona.prototype.caminar = function (){
    console.log(`caminando`);
}

const administrador = new Persona("Yeimer", 22);
const mecanico = new Persona("Juan", 37);

administrador(persona1);
mecanico(mecanico);


function Ingeniero (nombre, edad, correo){
    this.super = Persona;
    this.super(nombre, edad);
    this.correo = correo;
}

// Ingeniero hereda de persona y se trae todo lo del prototipo de persona

Ingeniero.prototype = new Persona();
Ingeniero.prototype.constructor = Ingeniero;

//Sobreescritura del metodo del prototipo padre
Ingeniero.prototype.caminar = function (){
    console.log(`Hola me llamo ${this.nombre}`);

}

//hacemos un metodo propio de ingeniero
Ingeniero.prototype.mostrarCorreo = function (){
    console.log(`Mi correo es ${this.correo}`);
}


const hombre = new Ingeniero("Yeimer", 22, "qDp5H@example.com");
const mujer = new Ingeniero("Juana", 22, "qDp5H@example.com");

console.log(hombre);
console.log(mujer);
mujer.caminar();

