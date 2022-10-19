import React from 'react';
import style from './Paragraph2.module.css';

const Paragraph2 = props => {

    return <div className={style.container}>
     <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
      <h1 className={style.header}>Lecture de la Torah</h1>
      <p className={style.texteStyle}>Office de Chaharit & lecture de la Paracha Lekh Leha</p> 
      <p className={style.texteStyle}>Samedi 5 Novembre 2022 à 9h</p> 
      <p className={style.texteStyle}>Synagogue d'Enghien-les-Bains</p> 
      <p className={style.texteStyle}>47 rue de Malleville,</p> 
      <p className={style.texteStyle}>95880, Enghien-les-Bains</p>
    </article>
      </div>;
 }

 export default React.memo(Paragraph2);