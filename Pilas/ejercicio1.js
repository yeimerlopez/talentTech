class Stack{
    constructor(){
        this.stack = [];
    }


Push(element){
    this.stack.push(element);
    return this.stack;
}

Pop(){
    return this.stack.pop();
}

peek(){
    return this.stack[this.stack.length - 1];
}

// Retorna el numero de elementosque contiene una pila
size(){
    return this.stack.length;   
}

print(){
    console.log(this.stack)
}

}

const stack = new Stack();
console.log(stack.size());
console.log(stack.Push(1));
console.log(stack.Push(2));
console.log(stack.Push(3));
console.log(stack.Pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());