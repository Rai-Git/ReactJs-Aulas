import {useEffect, useState} from 'react'

export default function Consulta() {
  const [lista, setLista] = useState([]) //mantem o estado do componente

  useEffect(()=>{consultar()},[])// executado toda vez que o componente é 
  //inicializado ou sofre alteração de estado.

  async function consultar(){
    let response = await fetch('http://localhost:3000/contatos')
    let dados = await response.json()
    setLista(dados)
  }

  return (
    <div className="App">
      <h1>Nossa Agenda</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Fone</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(ct =>
            <tr>
              <td>{ct.id}</td>
              <td>{ct.nome}</td>
              <td>{ct.email}</td>
              <td>{ct.fone}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}