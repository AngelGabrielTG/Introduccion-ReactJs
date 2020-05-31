import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Productos from './components/Products';
import Footer from './components/Footer';

function App() {

  //Listado de Productos
  //1.Es el State. 2.Es la funcion que reescribe el State
  const [ products, saveProducts ] = useState([
    { id:1, nombre:'Maquina de Coser Sunstar', precio:1000},
    { id:2, nombre:'Maquina de Remallar Sunstar', precio:1050},
    { id:3, nombre:'Maquina de Voleadora', precio:2000}
  ]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h3>Listado de Productos</h3>
      {products.map(producto => (
        <Productos 
          key={producto.id}
          producto={producto}
        />
      ))}

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
