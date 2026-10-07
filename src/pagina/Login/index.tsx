    import React from "react"
    import { useState } from "react"

    function Login () {

        // Ts
        const [nome, setNome] = useState('');
        const [endereco, setEndereco] = useState('');

        function handleChangeNome (evento: React.ChangeEvent<HTMLInputElement>){
            setNome(evento.target.value)
        }

        const [senha ,setSenha] = useState('');
        function handleChangeSenha (evento: React.ChangeEvent<HTMLInputElement>){
            setSenha(evento.target.value)
        }

        return(
            <div>
                <h1>CADASTRO DE USUARIO</h1>
                <label>Nome:</label>
                <br />
                <input type="text" placeholder="Insira o nome" onChange={handleChangeNome}/>

                <br />
                <label>Senha:</label>
                <br />
                <input type="number" placeholder="Insira a senha" onChange={handleChangeSenha}/>
            </div>
        )

    }


    export default Login;