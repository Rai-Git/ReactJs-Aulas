import { useRef, useState } from "react";
import Card from "./Card";

function Cadastro() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[fone, setFone] = useState('')
    const[contato, setContato] = useState({nome: '',email:'',fone:'' })
    const[erro, setErro] = useState('')
    const inputRefNome = useRef(null)
    const inputRefEmail = useRef(null)
    const inputRefFone = useRef(null)
    const[contatos, setContatos]
    
    function salvar(){
        setErro('')
        if(nome === ''){
          setErro("O nome deve ser informado")
          inputRefNome.current.focus()
          return
        }

        if(email === ''){
            setErro("O email deve ser informado")
            inputRefEmail.current.focus()
            return
        }

        if(fone === ''){
            setErro("O fone deve ser informado")
            inputRefFone.current.focus()
            return
        }

        setContato({nome, email, fone})
    }
    return (
        <div className="container">
            <h2>Cadastro</h2>
            <div className="mb-2">
                <label className="label-control">Informe nome</label>
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="EX: maria" 
                  value={nome}
                  onChange={event => setNome(event.target.value)}
                  ref={inputRefNome}
                />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe email</label>
                <input 
                   className="form-control" 
                   type="text" 
                   placeholder="EX: maria@gmail.com" 
                   value={email}
                   onChange={event => setEmail(event.target.value)}
                   ref={inputRefEmail}
                />
            </div>

            <div className="mb-2">
                <label className="label-control">Informe fone</label>
                <input 
                   className="form-control" 
                   type="text" 
                   placeholder="EX: (47) 9090-7060" 
                   value={fone}
                   onChange={event => setFone(event.target.value)}
                   ref={inputRefFone}
                />
            </div>
            <div>
                {erro}
            </div>
            
            <div className="mt-3 d-flex justify-content-between">
                <button 
                    className="btn btn-outline-primary"
                    onClick={salvar}
                    >Salvar</button>
                <button className="btn btn-outline-danger">Cancelar</button>
            </div>
             <hr />

           {/** <Card nome={nome} email={email} fone={fone}/>*/} 
           <Card dados={contato}/>
        </div>
    )
}

export default Cadastro;