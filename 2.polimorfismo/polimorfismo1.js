

class Animal {
    constructor (nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    emitirSonido () {
        return console.log(`El animal ${this.nombre} esta emitiendo un sonido..`);
    }
}

class Perro extends Animal {
    constructor (nombre, color, raza, sexo) {
        super (nombre, color);
        this.raza = raza;
        this.sexo = null;    
    
    }
    ladrar () {
        return console.log(`El Perro ${this.nombre} esta ladrando`);
    }

    //metodos get y set

    get getRaza () {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

const perroMateo = new Perro('mateo', 'negro', 'pastor aleman', 'macho');

console.log(perroMateo);
console.log(perroMateo.getRaza);
perroMateo.setRaza = "Siberiano";
console.log(perroMateo.raza);


fill