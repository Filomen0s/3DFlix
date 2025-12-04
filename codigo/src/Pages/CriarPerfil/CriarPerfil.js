import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./CriarPerfil.module.css"; // caso você use CSS module (opcional)

const PROFILE_IMAGES = [
  "https://i.postimg.cc/MpFrNLFv/Untitled-1.png",
  "https://i.postimg.cc/52RkTrRv/Sem-Titulo-3.png",
  "https://i.postimg.cc/W1HfCyHk/Sem-Titulo-2.png",
  "https://i.postimg.cc/Gm5SVf5s/Sem-Titulo-1.png",
  "https://i.postimg.cc/9QnNKknw/Sem-nome-(180-x-180-px).png",
  "https://i.postimg.cc/c1fMZgS7/foto-180x180.png",
  "https://i.postimg.cc/SQc7q2hC/foto-180x180-(1).png",
];

function CriarPerfil() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [profileName, setProfileName] = useState("");
  const navigate = useNavigate();
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const chavePerfisPorUsuario = `perfis_${usuarioLogado}`;

  const handleSelectImage = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSaveProfile = () => {
    const trimmedName = profileName.trim();
    if (!trimmedName) {
      alert("Por favor, insira um nome para o perfil.");
      return;
    }

    if (selectedImageIndex === null) {
      alert("Por favor, selecione uma foto para o perfil.");
      return;
    }

    const newProfile = {
      nome: trimmedName,
      foto: PROFILE_IMAGES[selectedImageIndex],
    };

    let profiles = JSON.parse(localStorage.getItem(chavePerfisPorUsuario)) || [];
    if (!Array.isArray(profiles)) profiles = [];

    if (profiles.length >= 5) {
      alert("Máximo de 5 perfis atingido. Não é possível adicionar mais.");
      return;
    }

    profiles.push(newProfile);
    localStorage.setItem(chavePerfisPorUsuario, JSON.stringify(profiles));

    // limpar campos
    setProfileName("");
    setSelectedImageIndex(null);

    navigate("/Perfis");
  };

  const handleCancel = () => {
    navigate("/Perfis");
  };

  const stylebody = {
    backgroundColor: '#1F1F1F',
    backgroundImage: 'none',
    height: '100vh',
    overflow: 'hidden',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 'auto',

    marginTop: '-100px',
  };
  return (
    <div style={stylebody}>
      <div className={Styles.tituloFotos}>
        <h1>Foto do perfil</h1>
      </div>

      <div className={Styles.fotosPerfil}>
        {PROFILE_IMAGES.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`foto-${idx + 1}`}
            onClick={() => handleSelectImage(idx)}
            style={{
              cursor: "pointer",
              border: selectedImageIndex === idx ? "solid 5px #DAA520" : "solid 5px #FFFFFF",
              transition: "border-color 150ms ease",
            }}
          />
        ))}
      </div>

      <div className={Styles.tituloNome}>
        <h1>Nome do perfil</h1>
      </div>

      <div className={Styles.inserirNome}>
        <input
          type="text"
          placeholder="Nome"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
        />
        <button onClick={handleSaveProfile} className={Styles.salvar}>Salvar</button>
        <button onClick={handleCancel} className={Styles.cancelar}>Cancelar</button>
      </div>
    </div>
  );
}

export default CriarPerfil;
