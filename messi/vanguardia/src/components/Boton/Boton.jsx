import React from 'react';
import './Boton.css';

const Boton = (props) => {
  return (
    <button className='boton1' onClick={props.onClick}>
      {props.texto}
    </button>
  );
};

export default Boton;