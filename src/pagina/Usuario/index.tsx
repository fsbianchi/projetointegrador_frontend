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




import { useEffect, useState } from 'react';
import '../../stylo_css/stylo.css';

interface ItemTreino {
    id: number;
    esporte: string;
    descricao: string;
    data: string;
}

function Usuario() {
    const [atividades, setAtividades] = useState<ItemTreino[]>([]);
    
    // Estados para controle da edição
    const [idEmEdicao, setIdEmEdicao] = useState<number | null>(null);
    const [textoEdicao, setTextoEdicao] = useState<string>('');

    // Carrega os treinos do localStorage ao montar o componente
    useEffect(() => {
        carregarTreinos();
    }, []);

    const carregarTreinos = () => {
        const treinosSalvos = JSON.parse(localStorage.getItem('historicoTreinos') || '[]');
        setAtividades(treinosSalvos);
    };

    // Função para excluir um treino
    const handleExcluir = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir esta atividade?')) {
            const listaAtualizada = atividades.filter((item) => item.id !== id);
            setAtividades(listaAtualizada);
            localStorage.setItem('historicoTreinos', JSON.stringify(listaAtualizada));
        }
    };

    // Abre o modo de edição para o item selecionado
    const handleIniciarEdicao = (item: ItemTreino) => {
        setIdEmEdicao(item.id);
        setTextoEdicao(item.descricao);
    };

    // Salva as alterações feitas no treino
    const handleSalvarEdicao = (id: number) => {
        if (!textoEdicao.trim()) {
            alert('A descrição não pode ficar vazia.');
            return;
        }

        const listaAtualizada = atividades.map((item) => {
            if (item.id === id) {
                return { ...item, descricao: textoEdicao };
            }
            return item;
        });

        setAtividades(listaAtualizada);
        localStorage.setItem('historicoTreinos', JSON.stringify(listaAtualizada));
        setIdEmEdicao(null);
        setTextoEdicao('');
    };

    // Cancela a edição
    const handleCancelarEdicao = () => {
        setIdEmEdicao(null);
        setTextoEdicao('');
    };

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
                    {atividades.length === 0 ? (
                        <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Nenhum treino registrado ainda.</p>
                    ) : (
                        atividades.map((item) => (
                            <div className="atividade-item" key={item.id}>
                                {idEmEdicao === item.id ? (
                                    /* Modo de Edição */
                                    <div className="atividade-edicao-container">
                                        <span className="atividade-nome">{item.esporte}</span>
                                        <textarea
                                            className="input-edicao-atividade"
                                            value={textoEdicao}
                                            onChange={(e) => setTextoEdicao(e.target.value)}
                                            rows={2}
                                        />
                                        <div className="botoes-acoes-edicao">
                                            <button 
                                                className="btn-salvar-mini"
                                                onClick={() => handleSalvarEdicao(item.id)}
                                            >
                                                Salvar
                                            </button>
                                            <button 
                                                className="btn-cancelar-mini"
                                                onClick={handleCancelarEdicao}
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Modo Visualização */
                                    <>
                                        <div className="atividade-info-box">
                                            <span className="atividade-nome">{item.esporte}</span>
                                            <p className="atividade-descricao">
                                                {item.descricao} • <small>{item.data}</small>
                                            </p>
                                        </div>

                                        <div className="atividade-acoes">
                                            <button 
                                                className="btn-acao-icone btn-editar-atividade"
                                                onClick={() => handleIniciarEdicao(item)}
                                                title="Editar atividade"
                                            >
                                                ✏️
                                            </button>
                                            <button 
                                                className="btn-acao-icone btn-excluir-atividade"
                                                onClick={() => handleExcluir(item.id)}
                                                title="Excluir atividade"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default Usuario; 






