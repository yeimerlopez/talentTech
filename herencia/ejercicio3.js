class Usuario {
    constructor (nombre, correo, rol){
        this._nombre = nombre;
        this._correo = correo;
        this._rol = rol;
    }

    //Getters y Setters

    get getNombre(){
        return this._nombre;
    }

    set set_Nombre(nombre){
        this._nombre = nombre;
    }

    get getCorreo(){
        return this._correo;
    }

    set set_Correo(correo){
        this._correo = correo;
    }

    get getRol(){
        return this._rol;   
        
    }

    set set_Rol(rol){
        this._rol = rol;
    }
    


    //Metodos de la clase
    mostrarInformacion (){
        console.log(`Mi nombre es ${this.nombre}, mi correo es ${this.correo}, mi rol es ${this.rol}`);
    };

    ingresar (nombre){
        console.log(`Ingresando a la cuenta de ${nombre}`);
    }

    salir (){
        console.log(`Saliendo de la cuenta de ${this.nombre}`);
    }

    //Polimorfismo
    polimorfismo (){
        return this.mostrarInformacion();
    }
}

const usuario = new Usuario("yeimer", "yeimer@mobiletech.com", "admin");
console.log(usuario);



class Administrador extends Usuario {
    constructor (nombre, correo, rol, permisos, areaResponsabiidad){
        super (nombre, correo, rol);
        this.permisos = permisos;
        this.areaResponsabiidad = areaResponsabiidad;
    }

    get getPermisos(){
        return this.permisos;
    }

    set setPermisos(permisos){
        this.permisos = permisos;
    }

    //Sobre escribimos el metodo de la clase padre
    get getIngresar(){
        return super.ingresar
    }


    crearUSuario (){
        console.log(`Creando un usuario`);
    }

    eliminarUsuario (){
        console.log(`Eliminando un usuario`);
    }

    editarUsuario (){
        console.log(`Editando un usuario`); 
    }

    //Polimorfismo

    polimorfismo (){
        return super.polimorfismo();
    }

}

let AdministradorPrueba = new Administrador("yeimer", "yeimer@mobiletech.com", "admin", ["crear", "editar", "eliminar"], "Equipo de desarrollo");
console.log("prueba de poliformismo" + AdministradorPrueba.polimorfismo());


let administrador1 = new Administrador("yeimer", "yeimer@mobiletech.com", "admin", ["crear", "editar", "eliminar"], "Equipo de desarrollo");
console.log(administrador1);
console.log(administrador1.crearUSuario());
console.log(administrador1.ingresar("yeimer"));

class Cliente extends Usuario {
    constructor (nombre, correo, rol, tipoMembresia){
        super (nombre, correo, rol);
        this._tipoMembresia = tipoMembresia;
    }

    //Metodos getters y setters

    get getTipoMembresia(){
        return this._tipoMembresia;
    }

    set setTipoMembresia(tipoMembresia){
        this._tipoMembresia = tipoMembresia;
    }

}
