import logo from './logo.svg';

import Cadastro from './Cadastro';
import Consulta from './Consulta';
import Pai from './Pai';
import Filho from './Filho';
import Contador from './Contador';

function App() {
  return (
    <div className="container">
       <h1 className="text-center mt-5">Aula 1</h1>
       { /*
         <hr />
        <Consulta /> 
        <Pai />
        <Contador />
        */
       } 
       <Cadastro />  
            
    </div>
  );
}

export default App;
