// ES5

function listar(a, b) {
  console.log("HOLA MUNDO");
  console.log(a);
  console.log(b);
  console.log("fin", arguments);
  console.log("tamaño : " + arguments.length);
  console.log(arguments[2]);
}

listar("pera", "fresa", "naranja", "sandia", "manzana", "banana");

// Clase 12 17:50

// Ejemplo 2 con párametros res

function listar2(a, b, ...z) {
    console.log("HOLA MUNDO");
    console.log(a);
    console.log(b);
    console.log("fin", z);
    console.log("tamaño : " + z.length);
    console.log(z[2]);
    console.log(z);
  }
  
  listar2("pera", "fresa", "naranja", "sandia", "manzana", "banana");
