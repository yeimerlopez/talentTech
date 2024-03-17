

/**
 * LISTA ENLAZADAS
 * Una lista enlazada es una estructura de datos **Linear** constituida por una secuencia de **nodos** en donde se 
 * guardan campos de datos arbitrarios y una referencia al nodo que apunta al siguiente nodo.
 */



/**
 * Clase Nodo que representa un nodo de una lista enlazada.
 * recibe dos parametros
 * @param {*} data - El dato que se guardará en el nodo.
 * @param {*} next - La referencia al siguiente nodo.
 */
class Nodo {

    constructor(data, next) {
        this.data = data;
        this.next = next;      
    }

}


/**
 * Clase LinkedList que representa una lista enlazada.
 * 
 */
class linkedList {

    constructor() {
        this.head = null;  // Referencia al primer nodo de la lista. se inicializa en null por defecto.
        this.size = 0;     // Cantidad de nodos de la lista. como se inicia  vacia se inicia en 0.
    };


    /**
     * Funcion que agrega un nuevo nodo al final de la lista.
     * @param {*} data - El dato que se guardará en el nuevo nodo.
     */

    add(data){

        const newNode = new Node(data, null);

        if (!this.head){
            
        }

    

    }

}