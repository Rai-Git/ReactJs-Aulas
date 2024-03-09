export default function Card(props){
    return(
        <div className="container mb-3">
            <label className="form-control">
                Nome:<span className="fw-bold ms-2">{props.dados.nome} </span>
                </label>
            <label className="form-control">Email:<span className="fw-bold ms-2">{props.dados.email}</span></label>
            <label className="form-control">Fone:<span className="fw-bold ms-2">{props.dados.fone}</span></label>
        </div>
    )
}