class Empleado {
  constructor(id, nombre, sueldo) {
    this._id = id;
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  // Metodos de acceso a los atributos privados

  get getId() {
    return this._id;
  }

  set setId(id) {
    this._id = id;
  }

  get getnombre() {
    return this._nombre;
  }

  set setnombre(nombre) {
    this._nombre = nombre;
  }

  get getsueldo() {
    return this._sueldo;
  }

  set setsueldo(sueldo) {
    this._sueldo = sueldo;
  }

  getInformacion() {
    return `El id es ${this._id}, el nombre es ${this._nombre} y la sueldo es ${this._sueldo}`;
  }

  getDatoSueldo(){
    return `${this._sueldo}`;  
  }
}

class Gerente extends Empleado {
  constructor(id, nombre, sueldo, bono) {
    super(id, nombre, sueldo);
    this._bono = bono
  }

  get getbono(){
    return this._bono;
  }

  set setbono(bono){
      this._bono = bono;
  }

  getInformacion(){
      return `${super.getInformacion()} y el bono es ${this._bono}`
  }

  getInformacion2(){
    return `El id es ${this._id}, el nombre es ${this._nombre} y la suelda es ${this._sueldo} y el bono es ${this._bono}`
  }



}

const instancia = new Empleado(45, "Margarita", 2500000);
console.log(instancia.getInformacion());

const instanciaGerente = new Gerente(45, "Margarita", 2500000, 500000);
console.log(instanciaGerente);
