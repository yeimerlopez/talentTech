

//Metodos de los Arreglos


const arreglo = [

    {
        id: 1,
        nombre: "carlos",
        edad: 30
    },
    {
        id: 2,
        nombre: "pedro",
        edad: 25

    },
    {
        id: 1,
        nombre: "juan",
        edad: 30
    },
    {
        id: 2,
        nombre: "ananias",
        edad: 25
        
    }

]

//Map ejercicio que traiga lo que tengamos en le


const nombre = arreglo.map(post => post.nombre);
console.log(nombre)


//Ejemplo Uso de some
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const prueba = numerosPares.some(num => num % 2 === 0);
console.log(prueba)

//Ejemplo Uso de sort
nombres = ['Ana', 'Beto', 'Carlos', 'David', 'Elena', 'Fernando', 'Gabriela', 'Hector', 'Isabel', 'Juan']

const ordenar = nombres.sort();
console.log(ordenar)
