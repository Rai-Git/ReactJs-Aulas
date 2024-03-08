//Criando outro componente
function Cadastro()
{
    return(
        <div className="container">
            <h1>Cadastro</h1>
            <label>Informe nome</label>
            <input type="text" placeholder="Ex: maria"></input>
            <button>Salvar</button>
        </div>
    );
}

export default Cadastro;