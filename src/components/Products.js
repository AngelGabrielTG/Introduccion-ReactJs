import React from 'react';

const Products = ({producto, productos, carrito, agregarCarrito}) => {

    const { nombre, precio, id } = producto;

    //Agregando Producto al Carrito
    const selectProduct = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        console.log(producto);
    } 

    return ( 
        <div>
            <h5>{ nombre }</h5>
            <p>${ precio }</p>
            <button 
                type="button"
                onClick={ () => selectProduct(id) }>
                Comprar
            </button>
        </div>
    );
}
 
export default Products;