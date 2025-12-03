import React, { useEffect } from "react";
import Styles from "./Login.module.css"; // caso você use CSS module (opcional)

import Logo3DFlix from '../../Components/IMG/Logo3D/DESIGN_3D_1.svg';

function Login() {

  useEffect(() => {
    const botao = document.getElementById("botaoLogin");

    const handleLogin = () => {
      const emailLogin = document.getElementById("email").value;
      const senhaLogin = document.getElementById("senha").value;

      const dadosCadastro = JSON.parse(localStorage.getItem("BancoCadastro"));

      if (emailLogin === "" || senhaLogin === "") {
        alert("Por favor, preencha todos os campos.");
      } 
      else if (
        !dadosCadastro ||
        emailLogin !== dadosCadastro.email ||
        senhaLogin !== dadosCadastro.senha
      ) {
        alert("Email ou senha incorretos. Por favor, tente novamente.");
      } 
      else {
        window.location.href = "/Perfis";
      }
    };

    botao.addEventListener("click", handleLogin);

    return () => botao.removeEventListener("click", handleLogin);
  }, []);

  return (
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
  );
}

export default Login;
