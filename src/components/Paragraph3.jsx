import React from 'react';
import style from './Paragraph3.module.css';

const Paragraph3 = props => {

    return <div className={style.container}>
     <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
      <h1 className={style.header}>La soirée</h1>
      <h2 className={style.header}>The Party !!!</h2>
      <p className={style.texteStyle}>Samedi 5 Novembre 2022 à 20h30</p> 
      <p className={style.texteStyle}>Nous vous invitons à célébrer ce moment unique au Centre Communautaire Beth Hanna. (buffet Halavi)</p> 
      <p className={style.texteStyle}>54 Rue Carnot,</p> 
      <p className={style.texteStyle}>95360 Montmagny</p>
      <p className={style.texteStyle}>Code d'entrée CA380</p>
    </article>
      </div>;
 }

 export default React.memo(Paragraph3);