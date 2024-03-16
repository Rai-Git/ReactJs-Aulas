import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function ConsultaLocal() {
  const [lista, setLista] = useState([]) //mantem o estado do componente

  useEffect(()=>{consultar()},[])// executado toda vez que o componente é 
  //inicializado ou sofre alteração de estado.

  async function consultar(){
    let response = await fetch('http://localhost:3000/locais')
    let dados = await response.json()
    setLista(dados)
  }

  return (
    <div className="App">
      <h1>Locais cadastrados</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Rua</th>
            <th>Cep</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(ct =>
            <tr>
              <td>{ct.id}</td>
              <td>{ct.nome}</td>
              <td>{ct.rua}</td>
              <td>{ct.cep}</td>
              <td>{ct.bairro}</td>
              <td>{ct.cidade}</td>
              <td>{ct.fone}</td>
              <td><Link to={`/cadastroLocais/${ct.id}`}>editar</Link></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}