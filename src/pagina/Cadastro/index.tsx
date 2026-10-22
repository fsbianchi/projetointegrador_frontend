import React, { useState } from 'react'; // Adicionada a importação do React
import '../../stylo_css/stylo.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Correção aplicada: Adicionado ': React.FormEvent' ao parâmetro 'e'
    const handleCadastro = (e: React.FormEvent) => {
        e.preventDefault(); 
        
        console.log("Dados do formulário:", { nome, email, senha });
        alert(`Conta criada com sucesso para: ${nome}\n(Simulação Front-end)`);
        
        setNome('');
        setEmail('');
        setSenha('');
    };

    return (
        <div className="cadastro-master">
            <div className="cadastro-card">
                <h1>Criar Conta</h1>
                <p>Registe-se para começar a usar a plataforma.</p>

                <form className="cadastro-form" onSubmit={handleCadastro}>
                    <div className="input-group">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            placeholder="O seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="O seu endereço de email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Palavra-passe</label>
                        <input 
                            type="password" 
                            placeholder="Crie uma palavra-passe segura"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-cadastrar">REGISTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;