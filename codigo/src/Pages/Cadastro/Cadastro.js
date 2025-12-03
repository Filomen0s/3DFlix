import React, { useEffect } from "react";
import Styles from "./Cadastro.module.css"; // caso você use CSS module (opcional)

import Login from "../Login/Login";

import Logo3DFlix from '../../Components/IMG/Logo3D/DESIGN_3D_1.svg';

function Cadastro() {

  useEffect(() => {
    const botao = document.getElementById("botaoCadastro");

    const handleCadastro = () => {
      const emailCadastro = document.getElementById("email").value;
      const senhaCadastro = document.getElementById("senha").value;
      const confirmaSenha = document.getElementById("confirmarSenha").value;

      if (emailCadastro === "" || senhaCadastro === "" || confirmaSenha === "") {
        alert("Por favor, preencha todos os campos.");
      }
      else if (senhaCadastro !== confirmaSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
      }
      else {
        // limpar campos
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("confirmarSenha").value = "";

        const objetoCadastro = {
          email: emailCadastro,
          senha: senhaCadastro
        };

        localStorage.setItem("BancoCadastro", JSON.stringify(objetoCadastro));
        window.location.href = "/";
      }
    };

    botao.addEventListener("click", handleCadastro);

    return () => botao.removeEventListener("click", handleCadastro);
  }, []);

  return (
      <section className={Styles.areaCadastro}>
        <img src={Logo3DFlix} alt="Logo 3D Flix" />

        <div>
          <input id="email" type="email" placeholder="Email" />
          <input id="senha" type="password" placeholder="Senha" />
          <input id="confirmarSenha" type="password" placeholder="Confirmar senha" />

          <h1 className={Styles.irLogin}>
            <a href={"/"}>Já possui uma conta?</a>
          </h1>
        </div>

        <button id="botaoCadastro">Cadastrar</button>
      </section>
  );
}

export default Cadastro;
