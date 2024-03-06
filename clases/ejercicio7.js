class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    datos(){
        return `mi nombre es ${this.nombre} y mi edad es ${this.edad}`;
    }

    polimorfismo(){
        return this.datos;
    }
}

class Profesor extends Persona {

    constructor(nombre, edad, materia ){
        super(edad, edad)
        this.materia = materia;

    }
    polimorfismo(){
        return `super ${super.datos()} dicta la materia ${this.materia}`;
    }
}

class Estudiante extends Persona {

    constructor(nombre, edad, grado ){
        super(nombre, edad)
        this.grado = grado;

    }
    polimorfismo(){
        return `super ${super.datos()}  se encuentra en el grado ${this.grado}`;
    }
}

let profesor = new Profesor('Julian Diaz', 35, 'Matematicas');
console.log(profesor)
console.log(profesor.polimorfismo());


let estudiante = new Estudiante('Angel', 18, 'Septimo');
console.log(estudiante);
console.log(estudiante.polimorfismo());

