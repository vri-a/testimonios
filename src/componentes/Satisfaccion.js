import React from 'react';
import '../estilos/Satisfaccion.css'
import { AiFillStar } from 'react-icons/ai';

function Satisfaccion({ valor }) {
	const arr = [];
	const estrella = <AiFillStar className='valor'/>;
	const estrellas = () => {
		for (let i = 0; i < valor; i++) {
			arr.unshift(<AiFillStar className='valor' key={ i }/>);	
		}
	}
	estrellas();
	return (
		<div className='satisfaccion-contenedor'>
			{ arr.map(elem => (elem)) }
		</div>
	)
}

export default Satisfaccion;