import React, { useState } from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';
import Boton from './componentes/Boton';

function App() {
  const [tema, setTema] = useState(false);
  const cambiarTema = () => setTema(!tema);

  return (
    <div 
      className={`App ${tema ? 'modo-oscuro' : ''}`.trim()}>
        <Boton cambiarTema={cambiarTema}/>
        <Testimonio 
          nombreCompleto='Lia Rossi'
          foto='lia'
          comentario='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium expedita 
          laboriosam ratione id ab repudiandae tempore eos illo omnis provident ea sapiente ex 
          alias, quaerat exercitationem repellendus impedit assumenda!'
          valor='5'
       />
        <Testimonio 
          nombreCompleto='Matteo Cappellari'
          foto='matteo'
          comentario='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium expedita 
		 		  laboriosam ratione id ab repudiandae tempore eos illo omnis provident ea sapiente ex 
		  		laboriosam ratione id ab repudiandae tempore eos illo omnis provident ea sapiente 
          consectetur adipisicing elit. Ducimus laudantium expedita alias, quaerat exercitationem 
          repellendus impedit assumenda.'
          valor='3'
        />
        <Testimonio 
          nombreCompleto='Davide Gentile'
          foto='davide'
          comentario='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laudantium expedita 
		  		laboriosam ratione id ab repudiandae tempore eos illo omnis provident ea sapiente ex 
          laboriosam ratione id ab repudiandae tempore eos illo omnis provident ea sapiente ex 
		   		alias, quaerat exercitationem repellendus impedit assumenda!'
          valor='4'
        />
  </div>
    
  );
}

export default App;
