import React from 'react';
import '../estilos/Testimonio.css';
import Satisfaccion from './Satisfaccion';

function Testimonio( { nombreCompleto, foto, comentario, valor } ) {
	return (
		<div className='testimonios-contenedor'>
			<div className='testimonio-imagen'>
				<img 
					src={require(`../imagenes/${ foto }.jpg`)}
					alt={`Foto de ${ nombreCompleto }`}
				/>
				<p> { nombreCompleto }</p>
			</div>
			<div className='testimonio-comentario'>
			<Satisfaccion 
			valor={ valor }/>
				{ comentario }
			</div>
		</div>

	);
}

export default Testimonio;