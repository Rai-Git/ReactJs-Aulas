import { Button, Card, CardActions, CardContent } from "@mui/material";   
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

export default function DadosCard(){

    const Navigate = useNavigate()
    const [lista, setLista] = useState([]) //mantem o estado do componente
  
    useEffect(()=>{consultar()},[])// executado toda vez que o componente é 
    //inicializado ou sofre alteração de estado.
  
    async function consultar(){
      let response = await fetch('http://localhost:3000/contatos')
      let dados = await response.json()
      setLista(dados)
    }
    async function excluir(idcontato){
        await fetch(`http://localhost:3000/contatos/${idcontato}`, {method: 'DELETE'})
        toast.info('Contato excluído')
    }
    

    return(
        <div>
            <h2 className="text-center">Cards</h2>
            <div className="d-flex flex-wrap">
                {lista.map(ct =>
                    <Card className="m-3" sx={{width: '400px'}}>
                        <CardContent>
                            <p>Nome: {ct.nome}</p>
                            <p>Email: {ct.email}</p>
                            <p>Fone: {ct.fone}</p>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='primary' onClick={()=> Navigate(`/contato/${ct.id}`)}>Editar</Button>
                            <Button size='small' color='secondary' onClick={()=> excluir(ct.id)}>Excluir</Button>
                        </CardActions>
                    </Card>)
                }
               
            </div>
        </div>
    )
}