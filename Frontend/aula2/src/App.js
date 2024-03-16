
import {Link, Outlet} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App(){
  return (
    <div className="container">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='Cadastro'>Cadastro</Link></li>
          <li><Link to='Consulta'>Consulta</Link></li>
          <li><Link to='/cadastroLocais'>Cadastrar Local</Link></li>
          <li><Link to='/consultarLocal'>Consultar Local</Link></li>
          <li><Link to='/consultarcards'>Cards</Link></li>
          
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>      
      <ToastContainer toastStyle={{fontStyle:'14px', minHeight: '10PX', borderRadius:'8px'}}/>
    </div>
  );
}

export default App;
