
function crearCita (cita, callback) { 
    var miCita = "Como yo siempre digo," + cita;
    callback(miCita); // 2
}

    
function logCita (cita){
    console. log(cita);
}


crearCita ("come tus vegetales!", logCita); // 1

// Resultado en la consola:
// Como yo siempre digo, come tus vegetales!