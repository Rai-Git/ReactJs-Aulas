import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroLocais(){
    const[nomeLocal, setNomeLocal] = useState('')
    const[rua, setRua] = useState('')
    const[bairro, setBairro] = useState('')
    const[cep, setCep] = useState('')
    const[cidade, setCidade] = useState('')
    const[foneLocal, setFoneLocal] = useState('')

    const navigate = useNavigate()

    function salvar(){
        //objeto javascript
        let locais = {
            nome: nomeLocal,
            rua: rua,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            fone: foneLocal
        }
        fetch('http://localhost:3000/locais',
        {
            method: 'POST',
            body: JSON.stringify(locais)
        })
        //.then(response => navigate('/cadastroLocais'))
        navigate('/cadastroLocais')
    }
    return(
        <>
        <h1>Cadastro de Local</h1>
        <label className="form-label">Informe nome do local</label>
        <input className="form-control" type="text" placeholder="Informe nome do local"
        value={nomeLocal} 
        onChange={txt => setNomeLocal(txt.target.value)}/>

        <label className="form-label">Informe a rua</label>
        <input className="form-control" type="text" placeholder="Informe rua"
        value={rua} 
        onChange={txt => setRua(txt.target.value)}/>

        <label className="form-label">Informe o CEP</label>
        <input className="form-control" type="text" placeholder="Informe cep"
        value={cep} 
        onChange={txt => setCep(txt.target.value)}/>

        <label className="form-label">Informe o bairro</label>
        <input className="form-control" type="text" placeholder="Informe bairro"
        value={bairro} 
        onChange={txt => setBairro(txt.target.value)}/>

        <label className="form-label">Informe a cidade</label>
        <input className="form-control" type="text" placeholder="Informe cidade"
        value={cidade} 
        onChange={txt => setCidade(txt.target.value)}/>

        <label className="form-label">Informe fone do local</label>
        <input className="form-control" type="text" placeholder="Informe fone do local"
        value={foneLocal} 
        onChange={txt => setFoneLocal(txt.target.value)}/>

        <div className="mt-3">
            <button className="btn btn-primary" onClick={salvar}>Gravar</button>
        </div>
  </>
    )
}
