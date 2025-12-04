// ...existing code...
import React, { useState, useRef } from 'react';
import Styles from './Home.module.css';

import Navbar from '../../Components/Navbar/Navbar';
import FeedBack from '../../Components/Modal-FeedBack/FeedBack';
import BaseVideos from '../../Components/BaseVideos/BaseVideos';
import Footer from '../../Components/Footer/Footer';

import espacadorPretVermBaixo from '../../Components/IMG/EspacadorCBG/Espacador-PretVer-SentidoBaixo.png';
import espacadorVerPretBaxio from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoBaixo.png';
import espacadorImgTeaser from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoCima.png';
import Banner3D from '../../Components/IMG/BannerColoridoSolido.png';

// Sonoplastia IMG
import ImgSonoplastiaCafezin from '../../Components/IMG/Sonoplastia/CapaCafezinSagrado.png';
import ImgSonoplastiaClapClap from '../../Components/IMG/Sonoplastia/ClapClap.png';
import ImgSonoplastiaDesigual from '../../Components/IMG/Sonoplastia/Desigual.png';
import ImgSonoplastiaDexpaw from '../../Components/IMG/Sonoplastia/Dexpaw.png';
import ImgSonoplastiaNoFoco from '../../Components/IMG/Sonoplastia/noFoco.png';
import ImgSonoplastiaOSomDoEncontro from '../../Components/IMG/Sonoplastia/oSomDoEncontro.png';
import ImgSonoplastiaPoluicaoSonora from '../../Components/IMG/Sonoplastia/poluicaoSonora.png';
import ImgSonoplastiaAtencao from '../../Components/IMG/Sonoplastia/prendendoAtenção.png';
import ImgSonoplastiaUmDiaNoTrabalho from '../../Components/IMG/Sonoplastia/UmDiaNoTrabalho.png';
import ImgSonoplastiaVisitaDespercebida from '../../Components/IMG/Sonoplastia/VisitaDespercebida.png';

// Videoclipe IMG
import ImgVideoClipe7Years from '../../Components/IMG/Videoclipe/7Years.png';
import ImgVideoClipeDeusMeProteja from '../../Components/IMG/Videoclipe/DeusMeProteja.png';
import ImgVideoClipeEspresso from '../../Components/IMG/Videoclipe/Espresso.png';
import ImgVideoClipeLesBitels from '../../Components/IMG/Videoclipe/LesBitels.png';
import ImgVideoClipesPrettyIsntPretty from '../../Components/IMG/Videoclipe/PrettyIsntPretty.png';
import ImgVideoClipesSonheiQueTavaCasando from '../../Components/IMG/Videoclipe/SonheiQueTavaCasando.png';

// Cortes IMG
import ImgCortesAProva from '../../Components/IMG/Cortes/A Prova.png';
import ImgCortesDiaNormal from '../../Components/IMG/Cortes/Dia Normal.png';
import ImgCortesOPacote from '../../Components/IMG/Cortes/O pacote.png';
import ImgCortesPesadelos from '../../Components/IMG/Cortes/Pesadelos.png';
import ImgCortesRoubaramODherik from '../../Components/IMG/Cortes/Roubaram o Dherik.png';
import ImgCortesUmaLongaLongaEspera from '../../Components/IMG/Cortes/Uma longa, longa espera.png';

const Home = () => {
  // CONFIGS DE ESTILO EXTRA
  const styleEspacadorSonoplastia = {
    backgroundColor: '#A10E15',
    boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.5)',
    height: '80px',
    backgroundImage: `url(${espacadorVerPretBaxio})`
  };
  const styleEspacadorTeaser = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorImgTeaser})`
  };
  const styleEspacadorCortes = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorPretVermBaixo})`,
    border: 'none',
    boxShadow: 'none'
  };

  const styleBanner3D = {
    backgroundImage: `url(${Banner3D})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '450px'
  };

  const colorWhite = { color: '#f1f1f1' };

  const Sonoplastia = { scrollMarginTop: '20px' };
  // FIM DAS CONFIGS DE ESTILO EXTRA

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const handleOpenFeedback = () => setIsFeedbackOpen(true);
  const handleCloseFeedback = () => setIsFeedbackOpen(false);


  const handlePrev1 = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext1 = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  const handlePrev2 = () => {
    const el = carouselRef2.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext2 = () => {
    const el = carouselRef2.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  const handlePrev3 = () => {
    const el = carouselRef3.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext3 = () => {
    const el = carouselRef3.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onFeedbackClick={handleOpenFeedback} />
      <FeedBack isOpen={isFeedbackOpen} onClose={handleCloseFeedback} />

      <main>

        {/* Banner aqui */}
        <div className={Styles.Banner3D} style={styleBanner3D} />

        {/* ------------------- SONOPLASTIA ------------------- */}
        <section className={Styles.Sonoplastia} id="Sonoplastia" style={Sonoplastia}>

          <div className="espacador" style={styleEspacadorSonoplastia} />

          <div className="margin">

            <div className="espacador" />

            <div className={Styles.titulo}>
              <h2>Sonoplastia</h2>
              <hr />
            </div>

            <div className="espacador" />

            <div className={Styles.Carousel} ref={carouselRef}>
              <BaseVideos Img={ImgSonoplastiaCafezin} Nome="Cafézin Sagrado" />
              <BaseVideos Img={ImgSonoplastiaClapClap} Nome="Clap Clap" />
              <BaseVideos Img={ImgSonoplastiaDesigual} Nome="Desigual" />
              <BaseVideos Img={ImgSonoplastiaDexpaw} Nome="Dexpaw" />
              <BaseVideos Img={ImgSonoplastiaNoFoco} Nome="No Foco" />
              <BaseVideos Img={ImgSonoplastiaOSomDoEncontro} Nome="O Som do Encontro" />
              <BaseVideos Img={ImgSonoplastiaPoluicaoSonora} Nome="Poluição Sonora" />
              <BaseVideos Img={ImgSonoplastiaAtencao} Nome="Prendendo a Atenção" />
              <BaseVideos Img={ImgSonoplastiaUmDiaNoTrabalho} Nome="Um Dia no Trabalho" />
              <BaseVideos Img={ImgSonoplastiaVisitaDespercebida} Nome="Visita Despercebida" />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_sono}
              onClick={handlePrev1}
              aria-label="Anterior"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_sono}
              onClick={handleNext1}
              aria-label="Próxima"
            >
              →
            </button>

          </div>

          <div className="espacador" />
        </section>

        {/* ------------------- VIDEOCLIPE ------------------- */}
        <section className={Styles.VideoClipe} id="VideoClipe">

          <div className="margin">

            <div className={Styles.titulo}>
              <h2>Videoclipe</h2>
              <hr />
            </div>

            <div className="espacador" />

            <div className={Styles.Carousel} ref={carouselRef2}>
              <BaseVideos Img={ImgVideoClipeLesBitels} Nome="LesBitels" />
              <BaseVideos Img={ImgVideoClipesSonheiQueTavaCasando} Nome="Sonhei que Tava Casando" />
              <BaseVideos Img={ImgVideoClipeDeusMeProteja} Nome="Deus Me Proteja" />
              <BaseVideos Img={ImgVideoClipeEspresso} Nome="Espresso" />
              <BaseVideos Img={ImgVideoClipesPrettyIsntPretty} Nome="Pretty Isn't Pretty" />
              <BaseVideos Img={ImgVideoClipe7Years} Nome="7 Years" />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_video}
              onClick={handlePrev2}
              aria-label="Anterior videoclipe"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_video}
              onClick={handleNext2}
              aria-label="Próxima videoclipe"
            >
              →
            </button>

          </div>

          <div className="espacador" />

        </section>

        {/* ------ Cortes ------ */}
        <section className={Styles.Cortes} id="Cortes">
          <div className="espacador" style={styleEspacadorTeaser} />
          <div className="espacador" />
          <div className="margin">
            <div className={Styles.titulo}>
              <h2>Cortes</h2>
              <hr />
            </div>
            <div className="espacador" />

            <div className={Styles.Carousel} style={colorWhite} ref={carouselRef3}>
              <BaseVideos Img={ImgCortesAProva} Nome="A Prova" />
              <BaseVideos Img={ImgCortesDiaNormal} Nome="Dia Normal" />
              <BaseVideos Img={ImgCortesOPacote} Nome="O Pacote" />
              <BaseVideos Img={ImgCortesPesadelos} Nome="Pesadelos" />
              <BaseVideos Img={ImgCortesRoubaramODherik} Nome="Roubaram o Dherik" />
              <BaseVideos Img={ImgCortesUmaLongaLongaEspera} Nome="Uma Longa, Longa Espera" />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_cortes}
              onClick={handlePrev3}
              aria-label="Anterior videoclipe"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_cortes}
              onClick={handleNext3}
              aria-label="Próxima videoclipe"
            >
              →
            </button>
          </div>
          <div className="espacador" />
        </section>

        {/* ------ Webseries ------ */}
        <section className={Styles.Webseries} id="Webseries">
          <div className="margin">
            <div className={Styles.titulo}>
              <h2>Webséries</h2>
              <hr />
            </div>
            <div className="espacador" />
          </div>
          <div className="espacador" style={styleEspacadorCortes} />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
