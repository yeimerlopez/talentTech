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


class Tigre extends Animal{
    constructor(id, nombre, color, garras, raza){

        super(id, nombre, color);
        this.garras = garras;
        this.raza = raza;
        
    }

    caminar(){
        return `El tigre ${this.nombre} de raza ${this.raza} camina con ${this.garras} garras`;
    }
    
}

const trigre1 = new Tigre( 1, 'Leo', 'Amarillo', "largas", 'bengalina');
console.log(trigre1);
console.log(trigre1.caminar());

const trigre2 = new Tigre( 2, 'Mateo', 'Amarillo', "cortas", 'bengala');
console.log(trigre2);
console.log(trigre2.caminar());