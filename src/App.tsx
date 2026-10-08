import './App.css'
import NotFound from './pagina/notfound';
import Home from './pagina/Home';
import Login from './pagina/Login';
import Cadastro from './pagina/Cadastro';
import Parceiros from './pagina/Parceiros';
import { Route, Routes } from 'react-router-dom';
import Usuario from './pagina/Usuario';


function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/cadastro" element={<Cadastro />} />
        <Route path="/parceiros" element={<Parceiros/>} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </>
  )
}

export default App;
