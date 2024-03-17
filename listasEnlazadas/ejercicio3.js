class Node {
  constructor(val) {
    this.val = val;
    this.next= null;
  }
}


class LinkedList{

    constructor (){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }


    push(val){
        const nNodo = new Node(val)
        if(!this.head){
            this.head = nNode;
            this.tail = this.head;
        }else{
            this.tail.next = nNode;
            this.tail = mNode;
        }
        this.length++
        return this
    }
}


const lista = new LinkedList();
lista.push('a');
lista.push('a');
lista.push('a');
