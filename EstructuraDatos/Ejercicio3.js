

// metodo shift

const partesPc = ['monitor','Teclado','raton','mouse','targetaVideo'];

partesPc.shift();
console.log(partesPc);

// metodo unshift

const Colores = ['rojo','azul','verde'];

Colores.unshift('amarillo');
console.log(Colores);

// Metodo Reverse

const partesPc2 = ['monitor','Teclado','raton','mouse','targetaVideo'];

partesPc2.reverse();
console.log(partesPc2);

// Metodo splice

const Animales = ['perro','gato','loro'];
Animales.splice(1,0, 'conejo');
console.log(Animales);


// Metodo lastIndexOf

const ciudades = ['bogota','medellin','cali','barranquilla'];
ciudades.lastIndexOf('barranquilla')
console.log(ciudades);

// Metodo from

const Palabra = 'usggñoheogh{eri{ierger';

console.log(Array.from(Palabra));

