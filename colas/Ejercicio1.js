// Fila (Queue)
// Caracterizada por ser una secuencia de elementos en la  que la operacion de insercion (enqueue) se realiza
// por un extremo y la operacion de extraccion (dequeue) por el otro.   FIFO (First In, First Out).

// Constructor
// dequeue --> Extrae un elemento de la cola
// enqueue --> Inserta un elemento en la cola
// peek    --> Retorna el primer elemento de la cola
// getSize --> Retorna el numero de elementos que contiene una cola
// print   --> Imprime la cola
// isEmpty --> Indica si la cola esta vacio o no

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.front === this.rear) {
      //return null;
      return "La cola esta vacia";
    }
    const element = this.items[this.front];
    this.front++;
    return element;
  }

  getSize() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  isEmptyFunc() {
    if (this.getSize() === 0) {
      return "La cola esta vacia";
    } else {
      return "La cola no esta vacia";
    }
  }

  peek() {
    if (this.getSize() === 0) {
      return "La cola esta vacia"; // o null
    }
    return this.items[this.front];
  }

  print() {
    if (this.getSize() === 0) {
      return "La cola esta vacia";
    }
    let result = "";
    for (let i = this.front; i < this.rear; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

const queue = new Queue();
console.log(queue.dequeue());
queue.enqueue("1juan");
queue.enqueue("2pedro");
queue.enqueue("3carlos");
console.log(queue.dequeue());

console.log(queue.getSize());
console.log(queue.peek());
console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue);
