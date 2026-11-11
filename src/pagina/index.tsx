import '../stylo_css/stylo.css';

interface Receita {
    id: number;
    nome: string;
    categoria: string;
    tempo: string;
    imagem: string;
    ingredientes: string[];
    modoPreparo: string[];
}

function ReceitasSaudaveis() {
    const esportesReceitas: Receita[] = [
        {
            id: 1,
            nome: 'Crepioca Recheada de Frango',
            categoria: 'Café da Manhã',
            tempo: '10 min',
            imagem: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
            ingredientes: [
                '1 ovo + 1 clara',
                '2 colheres (sopa) de goma de tapioca',
                '1 colher (chá) de sementes de chia',
                'Sal e pimenta a gosto',
                'Frango desfiado com requeijão light para rechear'
            ],
            modoPreparo: [
                'Bata o ovo, a clara, a tapioca, a chia e os temperos até ficar homogêneo.',
                'Despeje em uma frigideira antiaderente em fogo baixo.',
                'Quando a base firmar, vire para dourar o outro lado.',
                'Adicione o recheio de frango, dobre ao meio e sirva.'
            ]
        },
        {
            id: 2,
            nome: 'Bowl de Salmão com Quinoa',
            categoria: 'Almoço / Jantar',
            tempo: '20 min',
            imagem: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
            ingredientes: [
                '1/2 xícara de quinoa cozida',
                '100g de salmão grelhado em cubos',
                '1/2 abacate fatiado',
                'Pepino japonês e tomate-cereja',
                'Azeite, suco de limão e gergelim'
            ],
            modoPreparo: [
                'Em uma tigela funda, coloque a quinoa como base.',
                'Organize o salmão, o abacate, o pepino e os tomates ao redor.',
                'Regue com azeite, limão e finalize com gergelim.'
            ]
        },
        {
            id: 3,
            nome: 'Panqueca Fit de Banana',
            categoria: 'Lanche / Sobremesa',
            tempo: '8 min',
            imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop',
            ingredientes: [
                '1 banana madura',
                '1 ovo',
                '2 colheres (sopa) de aveia em flocos finos',
                '1 pitada de canela em pó',
                'Mel ou pasta de amendoim para finalizar'
            ],
            modoPreparo: [
                'Amasse a banana em um prato.',
                'Misture bem o ovo, a aveia e a canela.',
                'Doure porções da massa em uma frigideira antiaderente dos dois lados.',
                'Finalize com mel ou pasta de amendoim.'
            ]
        }
    ];

    return (
        <div className="treino-master">
            <div className="treino-header">
                <h1>Receitas Saudáveis</h1>
            </div>

            <div className="treino-grid">
                {esportesReceitas.map((receita) => (
                    <div className="treino-card receita-card" key={receita.id}>
                        <div className="treino-imagem-container">
                            <img 
                                src={receita.imagem} 
                                alt={receita.nome}
                                className="treino-imagem" 
                            />
                        </div>
                        
                        <div className="treino-card-body">
                            <h2>{receita.nome}</h2>
                            <p className="receita-meta">
                                ⏱️ {receita.tempo} | 🏷️ {receita.categoria}
                            </p>
                        </div>

                        <div className="area-registro-treino receita-detalhes">
                            <strong>Ingredientes:</strong>
                            <ul className="receita-lista">
                                {receita.ingredientes.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>

                            <strong>Modo de Preparo:</strong>
                            <ol className="receita-lista">
                                {receita.modoPreparo.map((passo, i) => (
                                    <li key={i}>{passo}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReceitasSaudaveis;