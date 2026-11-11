import '../../stylo_css/stylo.css';

function Treino() {
    // Lista simulada de treinos para preencher os cartões
    const treinos = [
        { id: 1, nome: 'Treino A', foco: 'Peito e Tríceps', duracao: '45 min' },
        { id: 2, nome: 'Treino B', foco: 'Costas e Bíceps', duracao: '50 min' },
        { id: 3, nome: 'Treino C', foco: 'Pernas e Ombro', duracao: '60 min' }
    ];

    return (
        <div className="treino-master">
            <div className="treino-header">
                <h1>Meus Treinos</h1>
                <button className="btn-novo-treino">+ Novo Treino</button>
            </div>

            <div className="treino-grid">
                {treinos.map((treino) => (
                    <div className="treino-card" key={treino.id}>
                        <h2>{treino.nome}</h2>
                        <p className="treino-foco">Foco: {treino.foco}</p>
                        <p className="treino-duracao">Duração: {treino.duracao}</p>
                        <button className="btn-iniciar">Iniciar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treino;





import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../stylo_css/stylo.css';

function Treino() {
    const navigate = useNavigate();

    const esportes = [
        { id: 1, nome: 'Futebol', slug: 'futebol', imagem: 'https://img.magnific.com/fotos-gratis/vista-lateral-amigos-jogando-futebol_23-2150338688.jpg?semt=ais_hybrid&w=740&q=80' },
        { id: 2, nome: 'Caminhada/corrida', slug: 'corrida', imagem: 'https://forbes.com.br/wp-content/uploads/2025/09/saude-corrida-caminhada-parque.jpg' },
        { id: 3, nome: 'Vôlei', slug: 'volei', imagem: 'https://img.magnific.com/fotos-premium/grupo-de-amigos-diversos-jogando-volei-em-um-parque-ensolarado-com-grama-verde-durante-o-fim-de-semana-do-dia-do-trabalho_217690-2248.jpg?semt=ais_hybrid&w=740&q=80' },
        { id: 4, nome: 'Treino academia', slug: 'academia', imagem: 'https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/03/24100602/V-do-BTS-em-publicacao-nas-redes-sociais-Reproducao_Instagram.jpg' },
        { id: 5, nome: 'Basquete', slug: 'basquete', imagem: 'https://i.pinimg.com/736x/37/1e/36/371e36793a7a555c9a84c8c5c283cee5.jpg' },
        { id: 6, nome: 'Seu treino', slug: 'seu treino', imagem: 'https://asesorias.com/empresas/wp-content/uploads/2020/02/Software-gimnasio.jpg' }
    ];

    const [cardRegistroAberto, setCardRegistroAberto] = useState<number | null>(null);
    const [textoTreino, setTextoTreino] = useState('');

    const irParaTelaEsporte = (slug: string) => {
        navigate(`/treino/${slug}`);
    };

    const handleAbrirRegistro = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        if (cardRegistroAberto === id) {
            setCardRegistroAberto(null);
        } else {
            setCardRegistroAberto(id);
            setTextoTreino('');
        }
    };

    // Salva o treino no localStorage
    const handleSalvarTreino = (e: React.MouseEvent, esporteNome: string) => {
        e.stopPropagation();
        if (!textoTreino.trim()) {
            alert('Por favor, escreva algo antes de salvar.');
            return;
        }

        const novoTreino = {
            id: Date.now(),
            esporte: esporteNome,
            descricao: textoTreino,
            data: new Date().toLocaleDateString('pt-BR')
        };

        // Recupera os treinos já salvos ou inicia uma lista vazia
        const treinosSalvos = JSON.parse(localStorage.getItem('historicoTreinos') || '[]');
        
        // Adiciona o novo treino no início da lista
        const listaAtualizada = [novoTreino, ...treinosSalvos];
        
        // Salva novamente no localStorage
        localStorage.setItem('historicoTreinos', JSON.stringify(listaAtualizada));

        alert(`Treino de ${esporteNome} registrado com sucesso!`);
        
        setTextoTreino('');
        setCardRegistroAberto(null);
    };

    return (
        <div className="treino-master">
            <div className="treino-header">
                <h1>Meus Treinos</h1>
            </div>

            <div className="treino-grid">
                {esportes.map((treino) => (
                    <div 
                        className="treino-card" 
                        key={treino.id}
                        onClick={() => irParaTelaEsporte(treino.slug)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="treino-imagem-container">
                            <img 
                                src={treino.imagem || 'https://images.tcdn.com.br/img/img_prod/645555/noticia_14467158306875aace9bfd1.jpg'} 
                                alt={`Imagem do ${treino.nome}`}
                                className="treino-imagem" 
                            />
                        </div>
                        
                        <div className="treino-card-body">
                            <h2>{treino.nome}</h2>
                            <button 
                                className="btn-registrar"
                                onClick={(e) => handleAbrirRegistro(e, treino.id)}
                            >
                                {cardRegistroAberto === treino.id ? 'Fechar' : 'Registrar'}
                            </button>
                        </div>

                        {cardRegistroAberto === treino.id && (
                            <div 
                                className="area-registro-treino"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <textarea
                                    placeholder={`Descreva seu treino de ${treino.nome}...`}
                                    value={textoTreino}
                                    onChange={(e) => setTextoTreino(e.target.value)}
                                    rows={3}
                                />
                                <button 
                                    className="btn-salvar-treino"
                                    onClick={(e) => handleSalvarTreino(e, treino.nome)}
                                >
                                    Salvar Treino
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treino;












