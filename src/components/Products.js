import React from 'react';

const Products = ({producto}) => {

    const { nombre, precio, id } = producto;

    //Agregando Producto al Carrito
    const selectProduct = (id) => {
        console.log('Buying...', id)
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