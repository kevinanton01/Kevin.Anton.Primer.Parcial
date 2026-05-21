let carrito = [];

function obtenerCarrito() 
{
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}

function cargarProductosCarrito() 
{
    obtenerCarrito();

    let tabla = document.getElementById("tabla-carrito");
    let total = 0;

    carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        
        tabla.innerHTML += `
            <tr class="fila-producto-carrito">
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
            </tr>
        `
        let contenedorTotal = document.getElementById("valor-final");
        if(contenedorTotal){
            contenedorTotal.innerText = total;
        }


    });

}

function limpiarCarrito() 
{
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarProductosCarrito();
}

document.addEventListener("DOMContentLoaded", cargarProductosCarrito)
