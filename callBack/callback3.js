
function modificar(array, callback){
    array.push("red")
    callback()
}

const partes =  [ "conexion", "monitor", "Servidor" ];

modificar(partes, function(){
    console.log("se modifico el arreglo")
});

