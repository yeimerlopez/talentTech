class Grafo {
    constructor() {
        this.adjList = new Map();
    }


    addVertices(vertex) {

        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }

    }

    addArista(vertex1, vertex2) {

        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }

}

const lista = new Grafo();

