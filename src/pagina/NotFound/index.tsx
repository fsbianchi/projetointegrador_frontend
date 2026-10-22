import { Link } from 'react-router-dom';
import '../../stylo_css/stylo.css'; // Se o ficheiro estiver direto na pasta 'pagina', use '../stylo_css/stylo.css'

function NotFound() {
    return (
        <div className="notfound-master">
            <div className="notfound-card">
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <p>Oops i did it again! Parece que se perdeu no treino... A página que procura não existe ou foi movida.</p>
                
                {/* O Link redireciona de volta para a Home (/) */}
                <Link to="/" className="btn-voltar-home">
                    Voltar para a Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;