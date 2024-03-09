import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Consulta from './Componentes/consulta';
import Cadastro from './Componentes/Cadastro';
import App from './App';

const router = createBrowserRouter(
  [
    {
      path:'/', element: <App/>,
      children:[
        {path:'/cadastro',element: <Cadastro/>},
        {path:'/consulta',element: <Consulta/>}
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


