/**
 * Aca ese definimos un objeto literal con propiedades y metodos
 */

const Animal = {
  nombre: "perro",
  color: "negro",

  atacar() {
    console.log(`El animal ${this.nombre} esta atacando`);
  },
};

console.log(Animal);
