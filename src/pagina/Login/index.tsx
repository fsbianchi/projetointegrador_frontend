import { useState } from 'react';
import '../../stylo_css/stylo.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("Dados de acesso:", { email, senha });
        alert("Sessão iniciada com sucesso!\n(Simulação Front-end)");
    };

    return (
        <div className="login-master">
            <div className="login-card">
                <h1>Iniciar Sessão</h1>
                <p>Bem-vindo de volta à plataforma.</p>

                <form className="login-form" onSubmit={handleLogin}>
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
                            placeholder="A sua palavra-passe secreta"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-entrar">ENTRAR</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

