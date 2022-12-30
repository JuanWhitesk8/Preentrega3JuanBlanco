// PRODUCTOS
const productos = [
    // Shirts
    {
        id: "shirts-01",
        titulo: "Happy Life",
        imagen: "./img/camisetas/01.jfif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 27000
    },
    {
        id: "shirts-02",
        titulo: "Mickey",
        imagen: "./img/camisetas/02.jfif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 27000
    },
    {
        id: "shirts-03",
        titulo: "Snoopy",
        imagen: "./img/camisetas/03.jfif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 27000
    },
    {
        id: "shirts-04",
        titulo: "Moment",
        imagen: "./img/camisetas/04.jfif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 27000
    },
    {
        id: "shirts-05",
        titulo: "Living Dream",
        imagen: "./img/camisetas/05.jfif",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 27000
    },
    // Croptops
    {
        id: "croptop-01",
        titulo: "Crop Rojo",
        imagen: "./img/croptop/01.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-02",
        titulo: "Crop Cadena Azul",
        imagen: "./img/croptop/02.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-03",
        titulo: "Crop Cadena Negro",
        imagen: "./img/croptop/03.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-04",
        titulo: "Crop Negro",
        imagen: "./img/croptop/04.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-05",
        titulo: "Crop Cadena Rojo",
        imagen: "./img/croptop/05.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-06",
        titulo: "Crop Cadena Blanco",
        imagen: "./img/croptop/06.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-07",
        titulo: "Crop Cadena Ladrillo",
        imagen: "./img/croptop/07.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    {
        id: "camiseta-08",
        titulo: "Crop Cadena Rosado",
        imagen: "./img/croptop/08.jfif",
        categoria: {
            nombre: "Croptop",
            id: "croptop"
        },
        precio: 19000
    },
    // Hoodies
    {
        id: "Hoodies-01",
        titulo: "Hoodie Resorte",
        imagen: "./img/hoodies/01.jpg",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 65000
    },
    {
        id: "Hoodies-02",
        titulo: "Hoodie Gris",
        imagen: "./img/hoodies/02.jpg",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 65000
    },
    {
        id: "Hoodies-03",
        titulo: "Hoodie y Sudadera",
        imagen: "./img/hoodies/03.jpg",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 65000
    },
    {
        id: "Hoodies-04",
        titulo: "Hoodie Whatever",
        imagen: "./img/hoodies/04.jpg",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 65000
    },
    {
        id: "Hoodies-05",
        titulo: "Hoodie Blanco",
        imagen: "./img/hoodies/05.jpg",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 65000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}