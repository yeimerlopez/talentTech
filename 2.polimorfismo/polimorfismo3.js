class Fruta {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
    }

    describir() {
        return `Soy una fruta llamada ${this._nombre} y mi color es ${this._color}.`;
    }

    polimorfismo() {
        return this.describir();
    }
}

class Manzana extends Fruta {
    constructor(nombre, color, tipo) {
        super(nombre, color);
        this._tipo = tipo;
    }

    detalles() {
        return `${super.describir()} ademas, Soy una manzana ${this._tipo}.`;
    }
}

class Banana extends Fruta {
    constructor(nombre, color, curvatura) {
        super(nombre, color);
        this._curvatura = curvatura;
    }

    detalles() {
        return `${super.describir()} ademas, Soy una banana con una ${this._curvatura} curvatura .`;
    }
}

// Instancias
let manzana = new Manzana("Manzana", "roja", "Chilena");
console.log(manzana.detalles());
console.log(manzana);

let banana = new Banana("Banana", "amarillo", "leve");
console.log(banana.detalles());
console.log(banana);
