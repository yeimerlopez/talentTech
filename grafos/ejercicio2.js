
class grafo{
    constructor(){
        this.adjList = new Map();
    }


    addVertices(vertex){

        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }

    addArista(vertex1,vertex2){
        
    }

}