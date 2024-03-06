
const peliculas = [
    {
        nombre: "duro de matar",
        año: 2003,
        genero: "accion",
        director: "John",
        actores: ["actor1", "actor2", "actor3"],
        duracion: 120

    },

    {
        nombre: "Armagedon",
        año: 2005,
        genero: "drama",
        director: "Pedro",
        actores: ["actor1", "actor2", "actor3"],
        duracion: 120

    },
    {
        nombre: "En busca de la felicidad",
        año: 2008,
        genero: "accion",
        director: "Juan",
        actores: ["actor1", "actor2", "actor3"],
        duracion: 120

    },
]

function getPeliculas(){
    return new Promise((resolve, reject) => {
        if (peliculas == 0) {
            reject(new Error("No se encontro ningun dato..."))
        }
        setTimeout(() => {
            resolve(peliculas);
        }, 2000);
    })
}

let ciudadesColombianas = [
    {
        nombre: "Bogotá",
        poblacion: 7443000,
        clima: "templado"
    },
    {
        nombre: "Medellín",
        poblacion: 2497000,
        clima: "templado"
    }
];

getPeliculas()
.then((peliculas) => console.log(peliculas[1].director))
.catch((err) => console.log(err.message))



// Ejemplo2 sin el uso de la palabra funtion
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ciudadesColombianas)
        }, 2500);
    })
}

getDatos().then((ciudadesColombianas) => {
    console.log(ciudadesColombianas)
})
.catch((err)=>{
    console.log(err.message)
})

// Ejemplo3

let marcasCelulares = [
    {
        nombre: "Samsung",
        modelos: ["Galaxy S21", "Galaxy Note 20", "Galaxy A52"]
    },
    {
        nombre: "Apple",
        modelos: ["iPhone 13", "iPhone 12", "iPhone SE"]
    }
];

function getData(){
    return new Promise((resolve, reject) => {
        if(marcasCelulares.length === 0){

            reject(new Error('El array se encuentra vacio.'))
        }

        setTimeout(() => {
            resolve(marcasCelulares)
        }, 3000);

    })
}
getData()
.then((response)=>{  // Response es el mismo marca celulares se le puede poner cualquier nombre
    console.log(response);
})
.catch((err)=>{
    console.log(err.message);
})