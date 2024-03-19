/** arreglo que contiene objetos */
const empleados = [
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
    }
]

desarrolladoresJava = empleados.filter(objeto => objeto.lenguaeje == "java");
console.log(desarrolladoresJava);