import logo from './logo.svg';

import Cadastro from './Cadastro';

// Isto é um componente.
// Depois de criar um novo componente eu tenho que chamalo no App como uma tag HTML
function App() {
  return (
    <div className="container">
      <h1>Hello Word!</h1>
      
      <Cadastro></Cadastro>
    </div>
  );
}

export default App;
