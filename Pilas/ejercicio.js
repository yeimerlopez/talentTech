// Pila (Stack)
// Lista ordenada que permite almacenar y recuperar datos de forma LIFO (Last In, First Out).

class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  /**
   * funcion push se encarga de insertar un elemento en la pila
   *@param element
   */
  push(element) {
    this.top++;
    this.items[this.top] = element;
    return `${element} agregado a la pila`;
  }

  /**
   * funcion pop se encarga de extraer un elemento de la pila
   *@param orderId
   */
  pop() {
    let deleteData;
    if (this.top > 0) {
      deleteData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return `${deleteData} eliminado`;
    }
  }

  /**
   * funcion getSize se encarga de retornar la cantidad de elementos que contiene la pila
   * @returns la cantidad de elementos que contiene la pila
   */
  getSize() {
    return `la pila tiene ${this.top} elementos`;
  }

  /**
   * funcion isEmpty se encarga de retornar si la pila esta vacia
   * @returns true si la pila esta vacia o false si la pila no esta vaci. ya
   */
  isempty() {
    if (this.top === 0) {
      return true;
    }
    return false;
  }

  /**
   * funcion peek se encarga de retornar el primer elemento de la pila sin sacarlo
   * @returns el primer elemento de la pila
   */

  peek() {
    if (this.isempty() === true) {
      return "la pila esta vacia";
    }
    return this.items[this.top];
  }

  /**
   * funcion print se encarga de retornar la pila en forma de string
   * @returns la pila en forma de string
   */

  print() {
    let result = "";
    for (let i = this.top; i > 0; i--) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

const stack = new Stack();

console.log(stack);
console.log(stack.push("juan"));
console.log(stack.push("pedro"));
console.log(stack.push("carlos"));
console.log(stack.getSize());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.print());
