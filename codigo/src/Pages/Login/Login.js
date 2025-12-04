import React, { useEffect } from "react";
import Styles from "./Login.module.css"; // caso você use CSS module (opcional)

import Logo3DFlix from '../../Components/IMG/Logo3D/DESIGN_3D_1.svg';

function Login() {

  useEffect(() => {
    const botao = document.getElementById("botaoLogin");

    const handleLogin = () => {
      const emailLogin = document.getElementById("email").value;
      const senhaLogin = document.getElementById("senha").value;

      if (emailLogin === "" || senhaLogin === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      let usuariosCadastrados = JSON.parse(localStorage.getItem("BancoCadastro")) || [];
      if (!Array.isArray(usuariosCadastrados)) usuariosCadastrados = [];

      // Procurar o usuário no array
      const usuarioEncontrado = usuariosCadastrados.find(
        usuario => usuario.email === emailLogin && usuario.senha === senhaLogin
      );

      if (!usuarioEncontrado) {
        alert("Email ou senha incorretos. Por favor, tente novamente.");
        return;
      }

      // Salvar o email do usuário logado
      localStorage.setItem("usuarioLogado", emailLogin);

      // Inicializar localStorage específico do usuário se não existir
      const chavePerfisPorUsuario = `perfis_${emailLogin}`;
      if (!localStorage.getItem(chavePerfisPorUsuario)) {
        localStorage.setItem(chavePerfisPorUsuario, JSON.stringify([]));
      }

      window.location.href = "/Perfis";
    };

    botao.addEventListener("click", handleLogin);

    return () => botao.removeEventListener("click", handleLogin);
  }, []);

  const stylebody = {
    backgroundImage: '../../Components/IMG/Backgrounds/Background_Login_Cadastro.jpg',
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    textalin: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  };
  return (
    <div className={Styles.body}>
      <section className={Styles.areaCadastro}>
        <img src={Logo3DFlix} alt="Logo 3D Flix" />

        <div className={Styles.inputsLogin}>
          <input id="email" type="email" placeholder="Email" />
          <input id="senha" type="password" placeholder="Senha" />
        </div>

        <h1 className={Styles.irLogin}>
          <a href="/Cadastro">Não possui uma conta?</a>
        </h1>

        <button id="botaoLogin">Entrar</button>
      </section>
    </div>
  );
}

export default Login;
