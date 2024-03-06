class Persona {
    constructor (nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    datos (){
        return `mi nombre es ${this._nombre} y mi edad es ${this._edad}`
    }

    polimorfismo (){
        return this.datos();
    }
}

class Profesor extends Persona {
    constructor (nombre, edad, materia){
        super (nombre, edad);
        this._materia = materia;
    }

    polimorfismo (){
        return `${super.datos()} y dicto la materia ${this._materia}`
    }

}

class Estudiante extends Persona{

    constructor (nombre, edad, grado){
        super (nombre, edad);   
        this._grado = grado;
    }

    polimorfismo (){
        return ` ${super.datos()} y me encuentro en el grado ${this._grado}`
    }
}

// Instancia

let profesor = new Profesor("Yeimer", 20, "Programacion");
console.log(profesor.polimorfismo());
console.log(profesor);

let estudiante = new Estudiante("Angel", 18, "Primero");
console.log(estudiante.polimorfismo());
console.log(estudiante);