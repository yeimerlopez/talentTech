

// creamosuna clase  para cada nodo en el arbol

class Nodo{
    //  cada  nodo va a tener 3 propiedades valor, derecha e izquierda  un punter
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    
    }
}

// creamos una clase para el arbol y tiene  una sola propiedad el nodo raiz que es la raiz del arbol Root

class ArbolBinario{
    constructor(){
        this.root = null
    }


    // metodo para insertar un nodo en el arbol recibe un valor y lo inserta en el arbol

    insert(value){
        const nNode = new Nodo(value)
        if(this.root === null){
            this.root = nNode
            return this.root;

        }
        let actual = this.root;
        while(true){
            if(value === current.value){
                return undefined
            }
            if(value < actual.value)return undefined
            if(value > actual.value){
                
            }
        }
    }

    // el metodo busqueda recibe un valor y lo busca en el arbol
    // si el valor no existe retorna undefined si existe retorna el Nodo

    busqueda(value){
        if (this.root === null) return undefined
        let actual = this.root;
        identificador = true;
        while(actual && !identificador){
            if(value<actual.value){
                actual = actual.left;
            }else if(value>actual.value){
                actual = actual.right;
            }else{
                identificador = true;
                return actual;
            }
        }
        
    }


}

