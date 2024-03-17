class Animal {
  constructor(id, nombre, color) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
  }

  getMessage() {
    return `${this.nombre} el color es ${this.color}`;
  }
}

class Perro extends Animal {
  constructor(id, nombre, color, sexo) {
    super(id, nombre, color);
    this.sexo = sexo;
    this.raza = null; // null = sin raza
  }

  atacar() {
    return `El perro ${this.nombre} de color ${this.color} esta atacando`;
  }

  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }

  static Cruce(){
    return console.log("este el cruce");
  }

}

const instanciaPerro = new Perro(1, "firulais", "negro", "macho");
//console.log(perro);

Perro.Cruce(); // esta es la forma de llamar un metodo estatico
console.log(instanciaPerro.getRaza);
instanciaPerro.setRaza = "pastor aleman";
console.log(instanciaPerro.getRaza);


