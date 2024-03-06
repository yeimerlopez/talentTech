

class Animal {
    constructor(id, nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    emitirSonido(){
        return console.log(`El animal ${this.nombre} esta emitiendo un sonido..`);
    }
    
}

const perro = new Animal(1, 'perro', 'negro');  
const gato = new Animal(2, 'gato', 'blanco');

console.log(perro);
console.log(gato);

console.log(perro.emitirSonido());
console.log(perro.emitirSonido());