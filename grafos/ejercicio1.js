function Graph() {
    //lleva una propiedad de lista de adyacencia
  this.adjList = {};
}

Graph.prototype.addVertex = function (vertex) {
  if (!this.adjList[vertex]) {
    this.adjList[vertex] = [];
  }
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
  this.adjList[vertex2].push(vertex1);
};

//crear el grafo

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Osaka");

graph.addEdge("Tokyo", "Osaka");
console.log(graph.adjList);


//Creamos una clase grafos 

class Grafo {

    // Constructor que lleva la propiedad de adjList  "lista de los adyasentes"
    constructor() {
        this.adjLista = {};
    }

    // Agrega un nuevo nodo al grafo
    //**creamos una funcion o metodo que se va llamar addNode toma un parametro y lo va a agregar como clave a adjList */

    addNode(nodo) {
        if(!this.adjLista[nodo]) {
            this.adjLista[nodo] = [];
        }
    }

    //**creamos una funcion o metodo que se va llamar addEdge toma dos parametro y los va a agregar como clave a adjLista */
    addconexion(nodo1, nodo2) {
        this.adjLista[nodo1].push(nodo2);
        this.adjLista[nodo2].push(nodo1);
    }

}

const nuevoGrafo = new Grafo();

nuevoGrafo.addNode("Tokyo");
nuevoGrafo.addNode("Osaka");
nuevoGrafo.addconexion("Tokyo", "Osaka");
console.log(nuevoGrafo)



