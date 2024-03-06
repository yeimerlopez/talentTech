class Animal {
    constructor(id, nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    result (){
        return `${this.nombre} el color es ${this.color}`
    }


}

class Perro extends Animal{
    constructor(id, nombre, color, sexo){
        super(id, nombre, color);
        this.sexo = sexo;
        this.raza = null;

    }

    atacar(){
        return `El perro ${this.nombre} esta atacando`
    }

    get  getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}


const perro = new Perro(1, 'perro', 'negro');
const gato = new Animal(2, 'gato', 'blanco');

console.log(perro.result());
console.log(gato.result());