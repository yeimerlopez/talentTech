// Creamos un clase para cada nodo dentro de la cola

class Node {
  // Cada nodo tiene dos propedades, su valor y otro que es el puntero que nos indica el siguiente
  constructor(value) {
    this.value = value;
    this.next = 0;
  }
}

class Queue {
  //La cola tiene 3 propiedades, primer nodo, ultimo nodo y el tamaño
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //El metodo enqueue() recibe un valor y lo agrega al final de la cola
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //Metodo dequeue() Elimina el valor inicial de la cola y devuelve otro valor
  dequeue() {
    if (!this.first) {
      return null;
    }

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const vCola = new Queue();
vCola.enqueue("Valor 1");
vCola.enqueue("Valor 2");
vCola.enqueue("Valor 3");
vCola.enqueue("Valor 4");

console.log(vCola.first);
console.log(vCola.last);
console.log(vCola.size);
vCola.enqueue("Valor 5");
console.log(vCola.dequeue());
console.log("Muetreme los nodos de la cola");
console.log(vCola.first);
