import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Consulta from './Componentes/consulta';
import Cadastro from './Componentes/Cadastro';
import App from './App';
import Edicao from './Componentes/editar';
import CadastroLocais from './Componentes/CadastroLocais';
import ConsultaLocal from './Componentes/ConsultarLocal';
import DadosCard from './Componentes/dadosCard';

const router = createBrowserRouter(
  [
    //Criando rotas
    {
      path:'/', element: <App/>,
      children:[
        //Isso são rotas
        {path:'/cadastro',element: <Cadastro/>},
        {path:'/consulta',element: <Consulta/>},
        {path: '/contato/:idcontato',element: <Edicao/> },
        {path:'/cadastroLocais',element: <CadastroLocais/>},
        {path:'/consultarLocal',element: <ConsultaLocal/>},
        {path:'/consultarcards',element: <DadosCard/>}
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


