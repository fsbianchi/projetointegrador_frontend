import '../../stylo_css/stylo.css';

function Parceiros() {
    // Array para simular os cartões, facilitando a repetição sem sujar o código
    const locais = [1, 2, 3, 4, 5, 6];

    return (
        <div className="parceiros-master">
            {/* Barra de Pesquisa */}
            <div className="pesquisa-container">
                <input 
                    type="text" 
                    className="input-pesquisa" 
                    placeholder="Buscar Fit Friend" 
                />
            </div>

            {/* Filtros de Categorias */}
            <div className="filtros-scroll">
                <button className="btn-filtro">Beach Tennis</button>
                <button className="btn-filtro">Corrida</button>
                <button className="btn-filtro">Futebol</button>
                <button className="btn-filtro">Futevôlei</button>
                <button className="btn-filtro">Natação</button>
                <button className="btn-filtro">Tênis</button>
                <button className="btn-filtro">Basquete</button>
                <button className="btn-filtro">Frescobol</button>
                <button className="btn-filtro">Treino funcional</button>
                <button className="btn-filtro">Ioga</button>
            </div>

            {/* Grelha de Cartões */}
            <div className="grid-parceiros">
                {locais.map((item) => (
                    <div className="cartao-parceiro" key={item}>
                        <div className="parceiro-info">
                            <h3>Arena Bauru</h3>
                            <p>Parceiro • Futevôlei</p>
                        </div>
                        <div className="parceiro-avatar"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Parceiros;