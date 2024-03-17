

// Creamos una clase para cada Nodo dentro de la pila

class Node {

    // cada nodo tuene dos atributos, son  el valor y el puntero que sigue

    constructor(value) {
        this.value = value;
        this.siguiente = null;
    }
}

// Creamos una clase para la pila

class Stack {


    constructor() {
        
        // La pila ba tener tener 3 propiedades, el primero es el tope, el segundo es el tamaño, y el tercero es el primero

        constructor () {
            this.primero = null;    // first
            this.ultimo = 0;        //
            this.size = 0;   //
        }
        
    }


    // Metodo Peek () Retorna el ultimo valor ingresado ala pila,sin sacarlo de esta 

    peek() {
        return this.primero;
    }


    // Metodo Push () Agrega un valor a la pila

    push(val) {
        let nodo = new Node(val);

        if (!this.primero) {
            this.primero = nodo;

        }

    }
}