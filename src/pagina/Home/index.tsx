import { useState } from 'react';
import '../../stylo_css/stylo.css';
import Post from '../../componentes/Post';
import type { tpFeed } from '../../types/feed';

function Home() {
    // 1. Estado para capturar o texto que está a ser digitado
    const [novoPostTexto, setNovoPostTexto] = useState('');

    // const [feed, setFeed] = useState([
    //     { id: 1, autor: 'Usuário FitFriend', arroba: '@usuario', tempo: 'há 2h', conteudo: 'Hoje foi dia de treino! 💪 Mais um dia cuidando da saúde e mantendo o foco.' },
    //     { id: 2, autor: 'Mirian', arroba: '@mirian', tempo: 'há 4h', conteudo: 'Alguém para uma partida de Beach Tennis amanhã de manhã?' },
    //     { id: 3, autor: 'Felipe', arroba: '@felipe', tempo: 'há 5h', conteudo: 'Alguém para uma partida de Futebol amanhã?' }
    // ]);

    const [feeds, setFeeds]= useState<tpFeed[]>([]);

    const carregarFeedAsync = async () =>{
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        let json = await response.json();

        const ConjuntoDados = Array.isArray(json) ? json: [json]

        setFeeds(ConjuntoDados);
    }

    // 2. Função disparada ao clicar no botão POSTAR
    const handlePostar = () => {
        // Evita criar publicações vazias
        if (novoPostTexto.trim() === '') return;

        // Cria o objeto do novo post simulando o seu utilizador logado
        const novoPostObj = {
                userId: 1,
                id: 1,
                title: 'Titulo',
                body: 'teste'
        }
         
        // Atualiza a lista colocando o novo post no topo (...feed copia os antigos)
        setFeeds([novoPostObj, ...feeds]);
        
        // Limpa a barra de digitação para o próximo post
        setNovoPostTexto('');
    };

    return(
        <div>            
            <div className='home-master'>
                <div className='home-post'>                                        
                    <button className='btn-postar' onClick={carregarFeedAsync}>CARREGAR</button>
                    <input 
                        type="text" 
                        placeholder='O QUE VOCÊ ESTÁ PENSANDO?' 
                        value={novoPostTexto} // Liga o input ao estado
                        onChange={(e) => setNovoPostTexto(e.target.value)} // Atualiza o estado ao digitar
                    />
                    <button className='btn-postar' onClick={handlePostar}>POSTAR</button>
                </div>
            </div>

            <div className='home-detalhes'>
                {feeds.map((post) => (
                    <Post></Post>                         
                    
                ))}
            </div>
        </div>
    )
}

export default Home;