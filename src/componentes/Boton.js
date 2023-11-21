import React from 'react';
import '../estilos/Boton.css';
import { CiLight } from 'react-icons/ci';

function Boton({ cambiarTema }) {
  return (
    <div className='boton-contenedor'>
			<div 
        className='boton'
        onClick={ cambiarTema }> 
				<CiLight className='icono' />
			</div>
    </div>
  );
}

export default Boton;