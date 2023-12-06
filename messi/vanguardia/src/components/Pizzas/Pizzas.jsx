import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pizzas.css';
import getValuesPizza from '../../middleware/Pizzas/pizza';
const Pizzas = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => 
    {
      try {
        const respuesta = await axios.get(); 
        setDatos(respuesta.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }

      getValuesPizza();
      setDatos(getValuesPizza().data)
    };

    obtenerDatos();
  }, []);

  return (
    <div className="contenedor">
      <h1>Pizzas</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>SKU</th>
            <th>Precio</th>
            <th>Ingredientes</th>
            <th>Tamaño</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato._id}>
              <td>{dato.nombre}</td>
              <td>{dato.sku}</td>
              <td> L. {dato.precio}</td>
              <td>{dato.ingredientes.join(', ')}</td>
              <td>{dato.tamaño}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pizzas;
