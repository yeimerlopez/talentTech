// hacer un arreglo que tenga 5 objetos y recorrerlo

const programador = [
  {
    nombre: "carlos",
    apellido: "lopez",
    edad: 30,
    correo: "qI8eN@example.com",
    lenguaeje: "java",
  },
  {
    nombre: "pedro",
    apellido: "jimenez",
    edad: 25,
    correo: "qI8eN@example.com",
    lenguaeje: "java",
  },

  {
    nombre: "juan",
    apellido: "lopez",
    edad: 30,
    correo: "qI8eN@example.com",
    lenguaeje: "python",
  },

  {
    nombre: "ana",
    apellido: "lopez",
    edad: 25,
    correo: "qI8eN@example.com",
    lenguaeje: "javaScript",
  },
];

// for (let i = 0; i < programador.length; i++) {
//   console.log(programador[i]);
// }
// usuarios = [];

// programador.forEach((i) => {
//   usuarios.push(i.nombre + " " + i.apellido + " " + i.lenguaeje);
// });

// console.log(usuarios);

//Ejercicio 6

usuarios = programador.map((i) => {
  console.log(i.nombre + " " + i.apellido + " " + i.lenguaeje);
});
