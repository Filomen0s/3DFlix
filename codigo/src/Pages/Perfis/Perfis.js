import React, { useEffect, useState } from "react";
import Styles from "./Perfis.module.css"; // caso você use CSS module (opcional)
import { useNavigate } from "react-router-dom";

function Perfis() {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const chavePerfisPorUsuario = `perfis_${usuarioLogado}`;

    // Carregar perfis do localStorage ao montar o componente
    useEffect(() => {
        carregarPerfis();
    }, []);

    function carregarPerfis() {
        const dados = JSON.parse(localStorage.getItem(chavePerfisPorUsuario)) || [];
        setUsuarios(Array.isArray(dados) ? dados : []);
    }

    function selecionarPerfil(perfil) {
        // Salvar informações do perfil no localStorage
        localStorage.setItem("perfilAtivo", JSON.stringify({
            nome: perfil.nome,
            foto: perfil.foto
        }));

        // Redirecionar para Home
        navigate("/Home");
    }

    function deletarPerfil(index) {
        let dados = JSON.parse(localStorage.getItem(chavePerfisPorUsuario)) || [];
        if (!Array.isArray(dados)) dados = [];

        if (index < 0 || index >= dados.length) return;

        const confirmar = window.confirm("Deseja excluir este perfil?");
        if (!confirmar) return;

        dados.splice(index, 1);
        localStorage.setItem(chavePerfisPorUsuario, JSON.stringify(dados));
        setUsuarios([...dados]);
    }

    function irParaCriarPerfil() {
        window.location.href = "/CriarPerfil";
        // ajuste o caminho conforme seu router
    }


    return (
        <body className={Styles.bodyPerfis}>
            <div>
                <div className={Styles.tituloPagina}>
                    <h1>Quem está assistindo?</h1>
                </div>

                <div className={Styles.perfis}>

                    {/* Renderizando perfis existentes */}
                    {usuarios.map((perfil, index) => (
                        <div
                            key={index}
                            className={`perfil-${index + 1}`}
                            onClick={() => selecionarPerfil(perfil)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={perfil.foto} alt={`Perfil ${index + 1}`} />
                            <p>{perfil.nome}</p>
                            <button
                                className={Styles.deleteBtn}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deletarPerfil(index);
                                }}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}

                    {/* Botão Criar Perfil (só aparece se tiver menos de 5) */}
                    {usuarios.length < 5 && (
                        <div id="criarPerfil" className={Styles.criarPerfil} onClick={irParaCriarPerfil}>
                            <div id="btn" className={Styles.addConta}>
                                <p className={Styles.mais}>+</p>
                            </div>
                            <p>Criar perfil</p>
                        </div>
                    )}

                </div>
            </div>
        </body>
    );
}

export default Perfis;
