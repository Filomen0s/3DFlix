import React from 'react'
import Styles from './BaseVideos.module.css'

const BaseVideos = ({ Img, Nome }) => {
  const espacadorHeight = {
    height: '30px',
    marginTop: '-5px',
    padding: 0
  };

  return (
    <div>
      <div className={Styles.Box_BaseVideos}>
        <img src={Img} alt='Capa do Vídeo' className={Styles.CapaVideo} />

        <i class="bi bi-play-circle" id={Styles.btn_playCapa}></i>

        <div className='espacador' style={espacadorHeight}></div>
        
        <h3 className={Styles.NomeDoVideo}>{Nome}</h3>
        
        <div className='espacador' style={espacadorHeight}></div>
        <div className={Styles.btn_saibaMais}><i class="bi bi-info-circle"></i><p>Mais Informações</p></div>
      </div>
    </div>
  )
}

export default BaseVideos;