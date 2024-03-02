function Consulta(){
    return(
        <>
           <h2 className="text-center">Consulta de Contatos</h2>
           <table className="table table-striped">
               <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Fone</th>
                  </tr>
               </thead>
               <tbody>
                   <tr>
                      <td>1</td>
                      <td>Maria</td>
                      <td>maria@gmail.com</td>
                      <td>(47) 9090-8090</td>
                   </tr>
                   <tr>
                      <td>2</td>
                      <td>João</td>
                      <td>joao@gmail.com</td>
                      <td>(47) 9090-8090</td>
                   </tr>
                   <tr>
                      <td>3</td>
                      <td>Antonio</td>
                      <td>antonio@gmail.com</td>
                      <td>(47) 9090-8090</td>
                   </tr>
               </tbody>
           </table>
        </>
    )
}

export default Consulta