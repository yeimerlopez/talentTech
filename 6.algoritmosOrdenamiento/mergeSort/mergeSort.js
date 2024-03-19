

Array.prototype.mergeSort = function () {
    if(this.length <= 1){
        return this;
    }

    let mitad = parseInt(this.length / 2);
    let izq = this.slice(0, mitad).mergeSort();
    let der = this.slice(mitad, this.length).mergeSort();

    let mescla = function (izq, der){
        let datos = [];
        while(izq.length > 0 && der.length > 0){
            
            datos.push(izq[0] <= der[0] ? izq.shift() : der.shift());
        }
        return datos.concat(izq).concat(der);
    };

    return mescla(izq, der);
}

let numeros = [7, 2, 1, 6, 8, 5, 3, 4, 9, 10];

console.log(numeros.mergeSort())


Me
