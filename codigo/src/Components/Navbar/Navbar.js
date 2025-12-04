import React, { useState } from 'react';
import Styles from './Navbar.module.css';

const Navbar = ({ onFeedbackClick }) => {

  // Estado que controla a rotação do ícone de perfil
  const [isProfileRotated, setIsProfileRotated] = useState(false);

  // Função que alterna (toggle) o estado de rotação do perfil
  // chamada quando o usuário toca/clica na caixa do perfil
  const handleProfileClick = () => {
    setIsProfileRotated(prev => !prev);
  };

  return (
    <div>
      <header>
        <div className={Styles.navbar}>

          {/* Box Profile */}
          <div className={Styles.box_profile} onClick={handleProfileClick}>

            {/* IMGprofile: espaço reservado para a imagem do usuário */}
            <div className={Styles.IMGprofile}></div>

            {/* Ícone da seta do perfil - rotação controlada por estado */}
            <i
              className={`bi bi-arrow-down arrowProfile ${isProfileRotated ? Styles.rotated : ''}`}
              id="arrowProfile"
              aria-hidden="true"
            ></i>

          </div> {/* Fim Box Profile */}

          {/* Box Menu */}
          <div className={Styles.box_menu}>
            <a href="#">Home</a>
            <a href="#Sonoplastia">Sonoplastia</a>
            <a href="#VideoClipe">Videoclipe</a>
            <a href="#Cortes">Cortes</a>
            <a href="#Webseries">Webséries</a>
           <a href="#" onClick={(e) => {
              e.preventDefault();
              onFeedbackClick();
            }}>Feedback</a>
          </div> {/* Fim Box Menu */}

          {/* Box Pesquisa e Logo */}
          <div className={Styles.box_PesquisaLogo}>

          
            {/* Logo: espaço para o logotipo do projeto */}
            <div className={Styles.Logo} />

          </div> {/* Fim Box Pesquisa e Logo */}

        </div>
      </header>
    </div>
  );
}

export default Navbar;