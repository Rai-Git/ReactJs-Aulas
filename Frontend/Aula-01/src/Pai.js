import Filho from "./Filho"

import { useState } from 'react'

function Pai(){
    const [msg, setMsg] = useState('já cortou a grama')
    return(
        <div className="container mt-3">
            <h2 className="text-center">Componente Pai</h2>
            
            <label className="label-control">Digite uma mensagem</label>            
            <input 
             className="form-control" 
             type="text" 
             placeholder="Ex: Ola" 
             value={msg}
             onChange={txt => setMsg(txt.target.value)}
             />
                        
            <Filho 
              msg="já cortou a grama?" 
            />  

            <Filho msg={msg}/>           
        </div>
    )
}

export default Pai