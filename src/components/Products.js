import React from 'react';

const Products = ({producto, productos, carrito, agregarCarrito}) => {

    const { nombre, precio, id } = producto;

    //Agregando Producto al Carrito
    // ' ... ' = Express Operator(Forma de Clonar un producto)
    const selectProduct = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarCarrito([
            ...carrito,
            producto
        ]);
    }

    //Eliminar Producto del Carrito
    const deleteProduct = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        //Colocar los productos en el State
        agregarCarrito(productos)
    }

    return ( 
        <div>
            <h5>{ nombre }</h5>
            <p>${ precio }</p>
            { productos 
            ?
                (
                    <button 
                        type="button"
                        onClick={ () => selectProduct(id) }>
                        Comprar
                    </button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick={ () => deleteProduct(id) }>
                        Eliminar
                    </button>
                )
            }
        </div>
    );
}
 
export default Products;