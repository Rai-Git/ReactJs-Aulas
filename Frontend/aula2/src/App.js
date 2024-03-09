
import {Link, Outlet} from "react-router-dom"

function App(){
  return (
    <div className="container">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='Cadastro'>Cadastro</Link></li>
          <li><Link to='Consulta'>Consulta</Link></li>
        </ul>
      </nav>
      <Outlet/>
      
    </div>
  );
}

export default App;
