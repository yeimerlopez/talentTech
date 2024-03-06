//Trabajado por prototipos

function Stack() {
  this._size = 0;
  this._storage = {};
}
Stack.prototype.push = function (data) {
  var size = ++this._size;
  this._storage[size] = data;
};
Stack.prototype.pop = function () {
  var size = this._size,
    deletedData;
  if (size) {
    deletedData = this._storage[size];
    delete this._storage[size];
    this._size--;
    return deletedData;
  }
};

var mystack = new Stack();

myStack.push("elemento1");
myStack.push("elemento2");
console.log(myStack.pop()); // Esto imprimirá 'elemento2'
console.log(myStack.pop()); // Esto imprimirá 'elemento1'
