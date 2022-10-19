import React from 'react';
import style from './Paragraph1.module.css';

const Paragraph1 = props => {

    return <div className={style.container}>
     <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
      <h1 className={style.header}>Mise des Téfilines</h1>
      <p className={style.texteStyle}>Vendredi 4 Novembre 2022</p> 
      <p className={style.texteStyle}>à 8H30 Synagogue d'Enghien-les-Bains</p> 
      <p className={style.texteStyle}>47 rue de Malleville,</p> 
      <p className={style.texteStyle}>95880, Enghien-les-Bains</p>
    <p className={style.texteStyle}>L'office sera suivi d'un Brunch</p>
    </article>
      </div>;
 }

 export default React.memo(Paragraph1);