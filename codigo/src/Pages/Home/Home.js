import React, { useState } from 'react';
import Styles from './Home.module.css';

// Componentes
import Navbar from '../../Components/Navbar/Navbar';
import FeedBack from '../../Components/Modal-FeedBack/FeedBack';
import BannerSite from '../../Components/IMG/VSFD/CameraAquelesEditadoMaior.png';
import BaseVideos from '../../Components/BaseVideos/BaseVideos';

// Espaçador Personalizado
import espacadorPretVermBaixo from '../../Components/IMG/EspacadorCBG/Espacador-PretVer-SentidoBaixo.png';
import espacadorImgTeaser from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoCima.png';

// Video Sonoplastia
import ImgSonoplastiaCafezin from '../../Components/IMG/Sonoplastia/CapaCafezinSagrado.png';
import ImgSonoplastiaDexpaw from '../../Components/IMG/Sonoplastia/Dexpaw.png';
import ImgSonoplastiaAtencao from '../../Components/IMG/Sonoplastia/prendendoAtenção.png';
import ImgSonoplastiaNoFoco from '../../Components/IMG/Sonoplastia/noFoco.png';
import ImgSonoplastiaVisitaDespercebida from '../../Components/IMG/Sonoplastia/VisitaDespercebida.png';
import ImgSonoplastiaDesigual from '../../Components/IMG/Sonoplastia/Desigual.png';
import ImgSonoplastiClapClap from '../../Components/IMG/Sonoplastia/ClapClap.png';
import ImgSonoplastiaUmDiaNoTrabalho from '../../Components/IMG/Sonoplastia/UmDiaNoTrabalho.png';
import ImgSonoplastiaoSomDoEncontro from '../../Components/IMG/Sonoplastia/oSomDoEncontro.png';
import ImgSonoplastiaoPoluicaoSonora from '../../Components/IMG/Sonoplastia/poluicaoSonora.png';
// FIm Video Sonoplastia

// Videos Videoclipe
import ImgVideoClipeLesBitels from '../../Components/IMG/Videoclipe/LesBitels.png';
import ImgVideoClipeSonheiQueTavaCasando from '../../Components/IMG/Videoclipe/SonheiQueTavaCasando.png';
import ImgVideoClipeDeusMeProteja from '../../Components/IMG/Videoclipe/DeusMeProteja.png';
import ImgVideoClipeEspresso from '../../Components/IMG/Videoclipe/Espresso.png';
import ImgVideoPrettyIsntPretty from '../../Components/IMG/Videoclipe/PrettyIsntPretty.png';
import ImgVideoClipe7Years from '../../Components/IMG/Videoclipe/7Years.png';
// Fim Videos Videoclipe

const Home = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleOpenFeedback = () => setIsFeedbackOpen(true);
  const handleCloseFeedback = () => setIsFeedbackOpen(false);

  const styleEspacador = {
    height: '50px'
  }; const styleEspacadorSonoplastia = {
    backgroundColor: '#A10E15',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    height: '80px',
    backgroundImage: `url(${espacadorPretVermBaixo})`
  }; const styleEspacadorTeaser = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorImgTeaser})`
  }; const styleEspacadorCortes = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorPretVermBaixo})`,
    border: 'none',
    boxShadow: 'none'
  };

  const Sonoplastia = {
    scrollMarginTop: '20px'
  }; const video40s = {
    animationDuration: '40s'
  };

  return (
    <div>
      <Navbar onFeedbackClick={handleOpenFeedback} />
      <FeedBack
        isOpen={isFeedbackOpen}
        onClose={handleCloseFeedback}
      />
      <main>

        <div className={Styles.Box_Banner}>

          {/* Banner do Site */}
          <img src={BannerSite} alt='Banner do Site' />

          {/* Box Mini Banner */}
          <div className={Styles.Box_MiniBanner}>
            {/* Botão Player */}
            <i class="bi bi-play-circle" id={Styles.btn_play}></i>

            {/* Mini Baner */}
            <div className={Styles.MiniBanner} />

            <div className='espacador' style={styleEspacador}></div>

            {/* Btn Mais Informações */}
            <div className={Styles.btn_informacoes}><i class="bi bi-info-circle"></i><p>Mais Informações</p></div>
          </div> {/* Fim Box Mini Banner */}

        </div>

        {/* Section Sonoplastia */}
        <section className={Styles.Sonoplastia} id='Sonoplastia' style={Sonoplastia}>

          <div className='espacador' style={styleEspacadorSonoplastia} />

          <div className='margin'>
            <div className='espacador' />

            <div className={Styles.titulo}>
              <h2>Sonoplastia</h2>
              <hr />
            </div>

            <div className='espacador' />
            <div className={Styles.carousel}>
              <div className={Styles.group} aria-hidden>
                <BaseVideos Img={ImgSonoplastiaCafezin} Nome={'Cafezinho da Tarde Sagrado'} />
                <BaseVideos Img={ImgSonoplastiaDexpaw} Nome={'Dexpaw'} />
                <BaseVideos Img={ImgSonoplastiaAtencao} Nome={'Prendendo a Atenção'} />
                <BaseVideos Img={ImgSonoplastiaNoFoco} Nome={'No Foco'} />
                <BaseVideos Img={ImgSonoplastiaVisitaDespercebida} Nome={'Visita Despercebida'} />
                <BaseVideos Img={ImgSonoplastiaDesigual} Nome={'Desigual'} />
                <BaseVideos Img={ImgSonoplastiClapClap} Nome={'Clap Clap'} />
                <BaseVideos Img={ImgSonoplastiaUmDiaNoTrabalho} Nome={'Um dia no trabalho'} />
                <BaseVideos Img={ImgSonoplastiaoSomDoEncontro} Nome={'O som do encontro'} />
                <BaseVideos Img={ImgSonoplastiaoPoluicaoSonora} Nome={'Poluição Sonora'} />
              </div>
              <div className={Styles.group} aria-hidden>
                <BaseVideos Img={ImgSonoplastiaCafezin} Nome={'Cafezinho da Tarde Sagrado'} />
                <BaseVideos Img={ImgSonoplastiaDexpaw} Nome={'Dexpaw'} />
                <BaseVideos Img={ImgSonoplastiaAtencao} Nome={'Prendendo a Atenção'} />
                <BaseVideos Img={ImgSonoplastiaNoFoco} Nome={'No Foco'} />
                <BaseVideos Img={ImgSonoplastiaVisitaDespercebida} Nome={'Visita Despercebida'} />
                <BaseVideos Img={ImgSonoplastiaDesigual} Nome={'Desigual'} />
                <BaseVideos Img={ImgSonoplastiClapClap} Nome={'Clap Clap'} />
                <BaseVideos Img={ImgSonoplastiaUmDiaNoTrabalho} Nome={'Um dia no trabalho'} />
                <BaseVideos Img={ImgSonoplastiaoSomDoEncontro} Nome={'O som do encontro'} />
                <BaseVideos Img={ImgSonoplastiaoPoluicaoSonora} Nome={'Poluição Sonora'} />

              </div>
            </div>
          </div>
          <div className='espacador' />

        </section>  {/* Fim Section Sonoplastia */}

        {/* Section Videoclipe */}
        <section className={Styles.VideoClipe} id='VideoClipe'>

          <div className='margin'>
            <div className={Styles.titulo}>
              <h2>Videoclipe</h2>
              <hr />

              <div className='espacador'></div>

              <div className={Styles.carousel}>
                <div className={Styles.group} style={video40s} aria-hidden>
                  <BaseVideos Img={ImgVideoClipeLesBitels} Nome={'LesBitels'} />
                  <BaseVideos Img={ImgVideoClipeSonheiQueTavaCasando} Nome={'Sonhei que Tava me Casando'} />
                  <BaseVideos Img={ImgVideoClipeDeusMeProteja} Nome={'Deus me Proteja'} />
                  <BaseVideos Img={ImgVideoClipeEspresso} Nome={'Espresso'} />
                  <BaseVideos Img={ImgVideoPrettyIsntPretty} Nome={'Pretty isn’t Pretty'} />
                  <BaseVideos Img={ImgVideoClipe7Years} Nome={'7 Years'} />

                </div>
                <div className={Styles.group} style={video40s} aria-hidden>
                  <BaseVideos Img={ImgVideoClipeLesBitels} Nome={'LesBitels'} />
                  <BaseVideos Img={ImgVideoClipeSonheiQueTavaCasando} Nome={'Sonhei que Tava me Casando'} />
                  <BaseVideos Img={ImgVideoClipeDeusMeProteja} Nome={'Deus me Proteja'} />
                  <BaseVideos Img={ImgVideoClipeEspresso} Nome={'Espresso'} />
                  <BaseVideos Img={ImgVideoPrettyIsntPretty} Nome={'Pretty isn’t Pretty'} />
                  <BaseVideos Img={ImgVideoClipe7Years} Nome={'7 Years'} />
                </div>
              </div>

            </div>

            <div className='espacador' />

            {/* Div com vídeos */}
          </div>

          <div className='espacador' />

        </section> {/* Fim Section Videoclipe */}

        {/* Section Cortes */}
        <section className={Styles.Cortes} id='Cortes'>
          <div className='espacador' style={styleEspacadorTeaser} />
          <div className='espacador' />

          <div className='margin'>
            <div className={Styles.titulo}>
              <h2>Cortes</h2>
              <hr />
            </div>

            <div className='espacador' />

            {/* Div com vídeos */}
          </div>

          <div className='espacador' />

        </section> {/* Fim Section Cortes */}

        {/* Section Webséries */}
        <section className={Styles.Webseries} id='Webseries'>

          <div className='margin'>
            <div className={Styles.titulo}>
              <h2>Webséries</h2>
              <hr />
            </div>

            <div className='espacador' />

            {/* Div com vídeos */}
          </div>


          <div className='espacador' style={styleEspacadorCortes} />
        </section> {/* Fim Section Webséries */}

      </main>
    </div>
  );
}

export default Home;