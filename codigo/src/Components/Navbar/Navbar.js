import React, { useState } from 'react';
import Styles from './Navbar.module.css';

const Navbar = ({ onFeedbackClick }) => {

  // Estado que controla se a busca está ativa (mostra/oculta a caixa de busca)
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Função que abre a busca (muda o estado para true)
  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  // Função que fecha a busca (muda o estado para false)
  const handleCloseClick = () => {
    setIsSearchActive(false);
  };

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

            {/* Box Pesquisa */}
            <div className={`${Styles.box_Pesquisa} ${isSearchActive ? Styles.ativar : ''}`} id="boxBuscar">

              {/* lupa_buscar: ícone que representa a busca */}
              <div className={Styles.lupa_buscar} id="lupaBuscar" onClick={handleSearchClick}>
                <i className="bi bi-search"></i>
              </div>

              {/* input_buscar: campo de texto para digitar a busca */}
              <div className={Styles.input_buscar}>
                  <select>
                    <option value="" disabled selected>Buscar...</option>
                    <option value="1"><a>Sonoplastia</a></option>
                    <option value="2">Videoclipe</option>
                    <option value="3">Teaser</option>
                    <option value="4">Cortes</option>
                    <option value="5">Webséries</option>
                  </select>
              </div>

              {/* btn_fechar: botão que fecha a caixa de busca */}
              <div className={Styles.btn_fechar} id="btnFechar" onClick={handleCloseClick}>
                <i className="bi bi-x-circle"></i>
              </div>

            </div> {/* Fim Box Pesquisa */}

            {/* Logo: espaço para o logotipo do projeto */}
            <div className={Styles.Logo}></div>

          </div> {/* Fim Box Pesquisa e Logo */}

        </div>
      </header>
    </div>
  );
}

export default Navbar;