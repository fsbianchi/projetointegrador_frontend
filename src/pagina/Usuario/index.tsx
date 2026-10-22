import '../../stylo_css/stylo.css';

function Usuario() {
    return (
        <div className="usuario-container">
            {/* Coluna da Esquerda - Perfil */}
            <aside className="usuario-sidebar">
                <div className="usuario-avatar"></div>
                <h2 className="usuario-nome">Mirian</h2>
                <p className="usuario-info">Bauru, SP • mirian@email.com</p>
                <button className="btn-editar">Editar Perfil</button>
            </aside>

            {/* Coluna da Direita - Atividades */}
            <main className="usuario-conteudo">
                <h2 className="conteudo-titulo">Resumo de Atividades</h2>
                
                <div className="lista-atividades">
                    {/* Item 1 */}
                    <div className="atividade-item">
                        <span className="atividade-nome">Equipe de Futevôlei</span>
                        <div className="atividade-bolinhas">
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="atividade-item">
                        <span className="atividade-nome">Equipe de Futevôlei</span>
                        <div className="atividade-bolinhas">
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="atividade-item">
                        <span className="atividade-nome">Equipe de Futevôlei</span>
                        <div className="atividade-bolinhas">
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                            <div className="bolinha"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Usuario;