

class pila {
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
        return this.stack;
    }
    pop(){
        return this.stack.pop();
    }
}