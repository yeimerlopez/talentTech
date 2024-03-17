class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ArbolBinario {
  constructor() {
    this.root = null;
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);

    if (this.raiz === null) {
        this.raiz = nuevoNodo;
    } else {
        this.insertarNodo(this.raiz, nuevoNodo);
    }
  }

  insertarNodo(nodo, nuevoNodo) {
    if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierdo === null) {
            nodo.izquierdo = nuevoNodo;
        } else {
            this.insertarNodo(nodo.izquierdo, nuevoNodo);
      }
    } else {
        if (nodo.derecho === null) {
            nodo.derecho = nuevoNodo;
        } else {
            this.insertarNodo(nodo.derecho, nuevoNodo);
        }
    }
  }
}
