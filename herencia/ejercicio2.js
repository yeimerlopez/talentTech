class Vehiculo {

    constructor(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }

    arrancar() {
        console.log("Arranco el vehiculo");
    }
      
}

class Motocicleta extends Vehiculo {
    constructor( marca, modelo, anio, color, potencia, cilindraje,) {

        super( marca, modelo, anio, color)
        this.potencia = potencia;
        this.cilindraje = cilindraje;
        
    }

    evaluar() {
        if(this.potencia > 100 && this.cilindraje > 600 ){
            console.log(`La motocicleta es deportiva de alto cilindraje`);
        }else{
            console.log("La motocicleta no es de alto cilindraje");
        }
    }


}

class Bus extends Vehiculo {
    constructor(marca, modelo, anio, color, ruta, capacidadP) {
        super( marca, modelo, anio, color)
        this.ruta = ruta;
        this.capacidadP = capacidadP;
    }

    recogerPasajeros() {
        console.log("Recogieno Pasajeros");
    }

    descargarPasajeros() {
        console.log("Descargando Pasajeros");
    }
}

const bolivariano = new Bus("VOLKSWAGEN","BOLIVARIANO", 2021, "Negro", "CABA", 50);

console.log(bolivariano.capacidadP);





