const productos = [
    {
      nombre: "Camisa",
      precio: 25.99,
      categoria: "Ropa",
      disponible: true
    },
    {
      nombre: "Libro",
      precio: 15.50,
      categoria: "Libros",
      disponible: false
    },
    {
      nombre: "Teléfono",
      precio: 399.99,
      categoria: "Electrónicos",
      disponible: true
    }
  ];

  function mostrarCarrito() {
    return new Promise((resolve, reject) => {
        console.log("Cargando el Carrito de compras...");

        setTimeout(() => {
            resolve(productos);
        }, 3500);
    })
  }

 //forma1
  mostrarCarrito().then((response) => {
    console.log(response);
  })

 //forma2  genera error await is only valid in async functions and the top level of a module
  //let mis_productos = await mostrarCarrito();

  //console.log(mis_productos);

  //forma3
  async function getMisProductos() {
    let mis_productos = await mostrarCarrito();
    console.log(mis_productos);
  }

  getMisProductos();