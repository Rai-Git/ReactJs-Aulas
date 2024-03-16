import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return(
        
        <div className="container">            
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cadastro'>Cadastro</Link></li>
                    <li><Link to='/consulta'>Consulta</Link></li>
                    <li><Link to='/cadastroLocais'>Cadastrar Local</Link></li>
                    <li><Link to='/consultarLocal'>Consultar Local</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}