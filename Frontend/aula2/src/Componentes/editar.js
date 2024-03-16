import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'

export default function Edicao(){
    const[nome, setNome] = useState('')
    const[email, setemail] = useState('')
    const[fone, setfone] = useState('')

    const {idcontato} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3000/contatos/${idcontato}`)
        .then(response => response.json())
        .then(data => {
            setNome(data.nome)
            setemail(data.email)
            setfone(data.fone)
        })
    },[])

    function salvar(){
        if(!validarDados()){
            return
        }
        //objeto javascript
        let contato = {
            id: idcontato,
            nome: nome,
            email: email,
            fone: fone
        }
        fetch(`http://localhost:3000/contatos/${idcontato}`,
        {
            method: 'PUT',
            body: JSON.stringify(contato)
        })
        //.then(response => navigate('/consulta'))
        navigate('/consulta')
    }

    function validarDados(){
        if(nome === ''){
            toast.error('O nome deve ser informado.')
            return false
        }
        if(email === ''){
            toast.error('O nome deve ser informado.')
            return false
        }
        if(fone === ''){
            toast.error('O nome deve ser informado.')
            return false
        }
    }
    return(
        <>
        <h1>Edição {idcontato}</h1>
        <label className="form-label">Informe nome</label>
        <input className="form-control" type="text" placeholder="Informe nome"
        value={nome} 
        onChange={txt => setNome(txt.target.value)}/>

        <label className="form-label">Informe email</label>
        <input className="form-control" type="text" placeholder="Informe email"
        value={email} 
        onChange={txt => setemail(txt.target.value)}/>

        <label className="form-label">Informe fone</label>
        <input className="form-control" type="text" placeholder="Informe fone"
        value={fone} 
        onChange={txt => setfone(txt.target.value)}/>

        <div className="mt-3">
            <button className="btn btn-primary" onClick={salvar}>Gravar</button>
        </div>
  </>
    )
}
