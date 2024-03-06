function solicitudServidor (consulta, callback){
  setTimeout (() => {
    let respuesta = consulta + "ejecutando";
    callback(respuesta);
  },5000);
}


function obtenerResultados (resultados){
  console. log("Respuesta servidor: " + resultados);
}

solicitudServidor("el servidor se esta: ", obtenerResultados)
