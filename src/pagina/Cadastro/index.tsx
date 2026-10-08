import { useState } from 'react';
import '../../stylo_css/stylo.css';

function Cadastro() {
    // 1. Estados para armazenar o que o usuário digita
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // 2. Função disparada ao clicar no botão
    const handleCadastro = (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        
        // Simula o envio dos dados. No futuro, isso será enviado para o seu backend
        console.log("Dados do formulário:", { nome, email, senha });
        alert(`Conta criada com sucesso para: ${nome}\n(Simulação Front-end)`);
        
        // Opcional: Limpar os campos após o cadastro
        setNome('');
        setEmail('');
        setSenha('');
    };

    return (
        <div className="cadastro-master">
            <div className="cadastro-card">
                <h1>Criar Conta</h1>
                <p>Registe-se para começar a usar a plataforma.</p>

                {/* 3. Adiciona o onSubmit no formulário */}
                <form className="cadastro-form" onSubmit={handleCadastro}>
                    <div className="input-group">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder="O seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} // Atualiza o estado
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="O seu endereço de email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Palavra-passe</label>
                        <input 
                            type="password" 
                            placeholder="Crie uma palavra-passe segura"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado
                            required
                        />
                    </div>

                    {/* 4. O botão deve ser type="submit" para acionar o formulário */}
                    <button type="submit" className="btn-cadastrar">REGISTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;