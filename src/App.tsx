import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './componentes/Header';
import NotFound from './pagina/Notfound';
import Home from './pagina/Home';
import Login from './pagina/Login';
import Cadastro from './pagina/Cadastro';
import Parceiros from './pagina/Parceiros';
import Usuario from './pagina/Usuario';
import Treino from './pagina/Treino';

function App() {
  return (
    <>
      {/* O Menu fica aqui em cima, para aparecer em todas as páginas */}
      <Header />
      
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/treino" element={<Treino />} />
      </Routes>
    </>
  );
}

export default App;