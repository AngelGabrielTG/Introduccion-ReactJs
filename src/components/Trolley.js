import React from 'react';
import './Trolley.css'
import Producto from './Products';

const Trolley = ({carrito, agregarCarrito}) => {
    return ( 
        <div className="trolley">
            <h2>TU CARRITO</h2>
            {carrito.length === 0
            ?   <p>No hay elementos en el carrito</p>
            :   carrito.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarCarrito={agregarCarrito}
                    />
                )) 
            }
        </div>
    );
}
 
export default Trolley;