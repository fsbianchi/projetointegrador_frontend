import { Link } from 'react-router-dom';
import '../../stylo_css/stylo.css';

function Header() {
    return (
        <header className="header-master">
            <div className="header-logo">
                {/* O Link "to" define para qual rota o utilizador vai ao clicar */}
                <Link to="/">Fit Friends</Link>
            </div>
            
            <nav className="header-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/treino" className="nav-link">Treinos</Link>
                <Link to="/parceiros" className="nav-link">Parceiros</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/usuario" className="nav-link">Perfil</Link>
                
                {/* Botão com destaque visual para criar conta */}
                <Link to="/cadastro" className="btn-nav-cadastro">Criar Conta</Link>
            </nav>
        </header>
    );
}

export default Header;