import { useState } from "react"

export default function Contador(){
    const[cont, setCont] = useState(0)
     function add(){
        setCont(cont + 1)
     }

     function dec(){
        setCont(cont - 1)
     }
    return(
        <div className="text-center">
            <h2>Contador</h2>
            
            <button className="btn btn-primary" onClick={add}>+</button>
            <button className="btn btn-danger ms-3" onClick={dec}>-</button>
          
            <div className="mt-3">
               <label>Valor: {cont} </label>
            </div>
        </div>
    )
}