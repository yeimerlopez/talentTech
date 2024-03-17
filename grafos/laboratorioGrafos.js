class grafo {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addArista(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }
}

const graph = new grafo();

graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addVertex("7");
graph.addVertex("9");

graph.addArista("3", "9");
graph.addArista("3", "7");
graph.addArista("3", "5");
graph.addArista("5", "8");
graph.addArista("5", "6");
graph.addArista("6", "7");
graph.addArista("6", "8");
