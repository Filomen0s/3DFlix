import React, { useEffect } from 'react';
import Styles from './FeedBack.module.css';

const FeedBack = ({ isOpen, onClose }) => {

    // Effect para controlar o scroll do body
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
        }
        return () => {
            document.documentElement.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Handler para cliques fora do modal
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(Styles.janela_modal)) {
            onClose();
        }
    }

    // Não renderiza nada se modal estiver fechado
    if (!isOpen) return null;

    return (
        <div className={Styles.janela_modal} onClick={handleOverlayClick}>
            <div className={Styles.container}>
                <div className={Styles.espacador}></div>

                <div className={Styles.titulo}>
                    <h2>Deixe seu FeedBack</h2>
                    <hr />
                </div>

                <div className={Styles.box_sugestoes}>
                    <div className={Styles.espacador}></div>

                    <div className={Styles.conteudo}>
                    <p>A gente quer saber o que você achou! Conta pra gente sua experiência usando o site, o que tá legal, o que pode melhorar e quais ideias você teria pra deixar o 3Dflix ainda mais incrível. Seu feedback ajuda a gente a evoluir e trazer uma experiência cada vez melhor pra turma! 🚀</p>

                    <div className={Styles.Qr_code} />
                    </div>

                    <div className={Styles.espacador}></div>

                    <div className={Styles.box_btn}>
                        <button onClick={onClose}>Fechar</button>
                    </div>

                </div>

                <div className={Styles.espacador}></div>

            </div>
        </div>
    )
}

export default FeedBack;