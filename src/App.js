import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Producto from './components/Products';
import Footer from './components/Footer';
import Trolley from './components/Trolley';

function App() {

  //Listado de Productos
  //1.Es el State. 2.Es la funcion que reescribe el State
  const [ products, saveProducts ] = useState([
    { id:1, nombre:'Maquina de Coser Sunstar', precio:1000},
    { id:2, nombre:'Maquina de Remallar Sunstar', precio:1050},
    { id:3, nombre:'Maquina de Voleadora', precio:2000}
  ]);

  //State para el Carrito
  const [ trolley, addTrolley ] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h3>Listado de Productos</h3>
      {products.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          productos={products}
          carrito={trolley}
          agregarCarrito={addTrolley}
        />
      ))}

      <Trolley 
        carrito={trolley}
        agregarCarrito={addTrolley}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
