let partesCarro = [
    {
        nombre: "Motor",
        descripcion: "Genera la potencia necesaria para que el carro funcione."
    },
    {
        nombre: "Transmisión",
        descripcion: "Transmite la potencia del motor a las ruedas para que el carro se mueva."
    }
];


function getParts(){
    return new Promise((resolve, reject) => {
        if (partesCarro.length === 0) {
            reject(new Error ("No existen partes que mostrar."))            
        }
        setTimeout(() => {
            resolve(partesCarro)
        }, 2000);
    })
}


const listarPartes = async () => {
    try {
        const partes = await getParts();
        console.log(partes);
    } catch (error) {
        console.log(error);
    }
}

listarPartes();
